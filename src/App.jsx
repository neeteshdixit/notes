import React, { useState, useEffect } from 'react';
import RunningMarquee from './components/RunningMarquee';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import NotesGallery from './components/NotesGallery';
import SocialBanner from './components/SocialBanner';
import Footer from './components/Footer';
import FlowerTrail from './components/FlowerTrail';
import NoteReaderModal from './components/NoteReaderModal';
import TrapsModal from './components/TrapsModal';
import { topicsData, studentHelperInfo } from './data/notesData';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Reader Modal State
  const [readerState, setReaderState] = useState({
    isOpen: false,
    topic: topicsData[0],
    pageIndex: 0
  });

  // Traps Modal State
  const [trapsModalState, setTrapsModalState] = useState({
    isOpen: false,
    topic: null
  });

  // Global search shortcut (Ctrl+K or /)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('.hero-search-input');
        if (searchInput) {
          searchInput.focus();
          searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenReader = (topic, pageIndex = 0) => {
    setReaderState({
      isOpen: true,
      topic,
      pageIndex
    });
  };

  const handleCloseReader = () => {
    setReaderState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSwitchReaderTopic = (newTopic) => {
    setReaderState((prev) => ({
      ...prev,
      topic: newTopic,
      pageIndex: 0
    }));
  };

  const handleOpenTraps = (topic) => {
    setTrapsModalState({
      isOpen: true,
      topic
    });
  };

  const handleCloseTraps = () => {
    setTrapsModalState({ isOpen: false, topic: null });
  };

  const handleSelectTopicFromHeroOrFooter = (topic) => {
    setActiveCategory(topic.id);
    const galleryEl = document.getElementById('notes-gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchClick = () => {
    const searchInput = document.querySelector('.hero-search-input');
    if (searchInput) {
      searchInput.focus();
      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="app-root">
      {/* Flower Particle Emitter from Cursor Arrow */}
      <FlowerTrail />

      {/* Top Running Headline Marquee */}
      <RunningMarquee />

      {/* Main Navbar */}
      <Navbar
        onSearchClick={handleSearchClick}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          const galleryEl = document.getElementById('notes-gallery');
          if (galleryEl) galleryEl.scrollIntoView({ behavior: 'smooth' });
        }}
        topics={topicsData}
      />

      <main className="main-content">
        {/* 3D Hero Section */}
        <Hero3D
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSelectTopic={(topic) => handleOpenReader(topic, 0)}
          topics={topicsData}
        />

        {/* 3D Notes Showcase & Gallery */}
        <NotesGallery
          topics={topicsData}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          onOpenReader={handleOpenReader}
          onOpenTraps={handleOpenTraps}
          onOpenPractice={(topic) => handleOpenReader(topic, topic.pages.length - 2)}
        />

        {/* Dedicated Social Section */}
        <SocialBanner />
      </main>

      {/* Site Footer */}
      <Footer
        topics={topicsData}
        onSelectTopic={handleSelectTopicFromHeroOrFooter}
      />

      {/* 3D Fullscreen Note Reader Modal */}
      <NoteReaderModal
        isOpen={readerState.isOpen}
        onClose={handleCloseReader}
        topic={readerState.topic}
        initialPageIndex={readerState.pageIndex}
        allTopics={topicsData}
        onSwitchTopic={handleSwitchReaderTopic}
      />

      {/* Common Traps Modal */}
      <TrapsModal
        isOpen={trapsModalState.isOpen}
        onClose={handleCloseTraps}
        topic={trapsModalState.topic}
      />
    </div>
  );
}
