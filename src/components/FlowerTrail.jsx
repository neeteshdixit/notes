import React, { useEffect, useRef, useState } from 'react';

// Flower particle engine for custom cursor trail
export default function FlowerTrail() {
  const canvasRef = useRef(null);
  const [flowerType, setFlowerType] = useState('mix'); // 'sakura', 'daisy', 'sunflower', 'mix'
  const [isEnabled, setIsEnabled] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const lastMousePos = useRef({ x: -100, y: -100 });
  const isMoving = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!isEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Flower particle pool
    const particles = [];

    // Flower palettes
    const flowerPalettes = {
      sakura: ['#f472b6', '#fb7185', '#fda4af', '#fecdd3', '#ffffff'],
      daisy: ['#ffffff', '#fef08a', '#facc15', '#e2e8f0', '#fef9c3'],
      sunflower: ['#f59e0b', '#fbbf24', '#fcd34d', '#b45309', '#d97706'],
      mix: ['#f472b6', '#38bdf8', '#a855f7', '#fbbf24', '#34d399', '#f87171', '#fda4af']
    };

    class Flower {
      constructor(x, y, isBurst = false) {
        this.x = x;
        this.y = y;
        const palette = flowerPalettes[flowerType] || flowerPalettes.mix;
        this.color = palette[Math.floor(Math.random() * palette.length)];
        this.centerColor = '#fef08a';

        this.petals = Math.floor(Math.random() * 2) + 2; // 5 or 6 petals
        this.size = Math.random() * 5 + 5; // Size between 9px and 17px
        this.maxLife = Math.random() * 35 + 40; // frames
        this.life = this.maxLife;

        const speed = isBurst ? Math.random() * 4 + 2 : Math.random() * 1.5 + 0.5;
        const angle = isBurst ? Math.random() * Math.PI * 2 : Math.random() * Math.PI * 2;

        this.vx = Math.cos(angle) * speed + (Math.random() - 0.5) * 0.8;
        this.vy = Math.sin(angle) * speed - (isBurst ? 1 : 0.5); // float up slightly
        this.gravity = 0.04;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.1;
        this.scale = 0.2;
        this.targetScale = Math.random() * 0.6 + 0.7;
        this.drift = (Math.random() - 0.5) * 0.4;
      }

      update() {
        this.x += this.vx + this.drift;
        this.y += this.vy;
        this.vy += this.gravity;
        this.rotation += this.rotSpeed;

        if (this.scale < this.targetScale) {
          this.scale += 0.08;
        }

        this.life--;
      }

      draw(c) {
        const progress = this.life / this.maxLife;
        const alpha = Math.max(0, Math.min(1, progress * 1.2));

        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.rotation);
        c.scale(this.scale, this.scale);
        c.globalAlpha = alpha;

        // Draw flower petals
        const petalDist = this.size * 0.45;
        const petalRadius = this.size * 0.35;

        for (let i = 0; i < this.petals; i++) {
          const angle = (i * 2 * Math.PI) / this.petals;
          const px = Math.cos(angle) * petalDist;
          const py = Math.sin(angle) * petalDist;

          c.beginPath();
          c.fillStyle = this.color;
          c.arc(px, py, petalRadius, 0, Math.PI * 2);
          c.fill();
        }

        // Center pollen core
        c.beginPath();
        c.fillStyle = this.centerColor;
        c.arc(0, 0, this.size * 0.25, 0, Math.PI * 2);
        c.fill();

        // Delicate center dot
        c.beginPath();
        c.fillStyle = '#b45309';
        c.arc(0, 0, this.size * 0.1, 0, Math.PI * 2);
        c.fill();

        c.restore();
      }
    }

    // Spawn on mouse move
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      lastMousePos.current = { x, y };

      // Spawn 1 to 2 flowers per move event
      particles.push(new Flower(x, y));
      if (Math.random() > 0.5) {
        particles.push(new Flower(x + (Math.random() - 0.5) * 10, y + (Math.random() - 0.5) * 10));
      }

      // Limit particle count
      if (particles.length > 90) {
        particles.splice(0, particles.length - 90);
      }

      isMoving.current = true;
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        isMoving.current = false;
      }, 150);
    };

    // Burst of flowers on click
    const handleClick = (e) => {
      const { clientX: x, clientY: y } = e;
      for (let i = 0; i < 18; i++) {
        particles.push(new Flower(x, y, true));
      }
    };

    // Touch support
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Render loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled, flowerType]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="flower-canvas"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9999
        }}
      />

      {/* Floating Mini Flower Control Toggle */}
      <div className="flower-widget-wrapper">
        <button
          onClick={() => setShowControls(!showControls)}
          className="flower-toggle-btn"
          title="Arrow Flower Settings (Click to customize mini flowers!)"
          aria-label="Flower trail settings"
        >
          <span className="flower-emoji">🌸</span>
          <span className="flower-btn-text">Flower Arrow</span>
        </button>

        {showControls && (
          <div className="flower-settings-popover">
            <div className="flower-popover-header">
              <span>🌸 Flower Trail Options</span>
              <button onClick={() => setShowControls(false)} className="close-mini-btn">✕</button>
            </div>
            <p className="flower-popover-desc">
              Arrow se nikalne wale mini flowers ka style chunein:
            </p>
            <div className="flower-theme-options">
              {[
                { id: 'mix', name: 'Rainbow Floral 🌺', icon: '🌺' },
                { id: 'sakura', name: 'Sakura Blossom 🌸', icon: '🌸' },
                { id: 'daisy', name: 'White Daisy 🌼', icon: '🌼' },
                { id: 'sunflower', name: 'Golden Sunflower 🌻', icon: '🌻' }
              ].map((style) => (
                <button
                  key={style.id}
                  onClick={() => setFlowerType(style.id)}
                  className={`flower-chip ${flowerType === style.id ? 'active' : ''}`}
                >
                  {style.name}
                </button>
              ))}
            </div>
            <div className="flower-toggle-switch">
              <label>
                <input
                  type="checkbox"
                  checked={isEnabled}
                  onChange={(e) => setIsEnabled(e.target.checked)}
                />
                <span>Enable Flower Trail</span>
              </label>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
