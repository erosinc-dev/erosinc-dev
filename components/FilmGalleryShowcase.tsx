'use client';

import React, { useState, useEffect } from 'react';
import { Film, Star, Megaphone, Camera, Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface FilmPhoto {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  category: 'Film Launches' | 'Celebrity PR' | 'Media & Press' | 'Red Carpet & Brand';
  featured?: boolean;
}

const filmCampaigns: FilmPhoto[] = [
  { id: 11, src: '/film/celeb_11.jpg', title: 'Shah Rukh Khan', subtitle: 'Movie Promotional Tour & Media Interaction', category: 'Film Launches', featured: true },
  { id: 3, src: '/film/celeb_03.jpg', title: 'Sushant Singh Rajput & Shraddha Kapoor', subtitle: 'Chhichhore Theatrical Release & Press Meet', category: 'Film Launches', featured: true },
  { id: 32, src: '/film/celeb_32.jpg', title: 'Aamir Khan', subtitle: 'Dangal Theatrical Promotion & Exclusive Meet', category: 'Film Launches', featured: true },
  { id: 14, src: '/film/celeb_14.jpg', title: 'Hrithik Roshan', subtitle: 'Celebrity PR & Exclusive Brand Session', category: 'Celebrity PR', featured: true },
  { id: 5, src: '/film/celeb_05.jpg', title: 'Ranveer Singh', subtitle: 'Jack & Jones Nationwide Campaign Launch', category: 'Red Carpet & Brand', featured: true },
  { id: 7, src: '/film/celeb_07.jpg', title: 'Kartik Aaryan', subtitle: 'Celebrity PR & Promotional Campaign Meet', category: 'Celebrity PR', featured: true },
  { id: 27, src: '/film/celeb_27.jpg', title: 'Ayushmann Khurrana', subtitle: 'Bollywood Hungama Media Interaction', category: 'Media & Press', featured: true },
  { id: 19, src: '/film/celeb_19.jpg', title: 'Siddharth Malhotra', subtitle: 'Artist Personal PR & Media Outreach', category: 'Celebrity PR', featured: true },
  { id: 25, src: '/film/celeb_25.jpg', title: 'Saif Ali Khan', subtitle: 'Brand Collaboration & Promotional Launch', category: 'Red Carpet & Brand', featured: true },
  { id: 22, src: '/film/celeb_22.jpg', title: 'Tiger Shroff', subtitle: 'Baaghi Movie Campaign & Promotional Tour', category: 'Film Launches', featured: true },
  { id: 23, src: '/film/celeb_23.jpg', title: 'Shraddha Kapoor', subtitle: 'Baaghi Theatrical Promotion & Artist Press Meet', category: 'Film Launches', featured: true },
  { id: 31, src: '/film/celeb_31.jpg', title: 'Kangana Ranaut', subtitle: 'Rangoon Movie Premiere & Press Release', category: 'Film Launches', featured: true },
  { id: 28, src: '/film/celeb_28.jpg', title: 'Kiara Advani & Mustafa', subtitle: 'Machine Movie Launch & Red Carpet Showcase', category: 'Film Launches', featured: true },
  { id: 20, src: '/film/celeb_20.jpg', title: 'Jacqueline Fernandez', subtitle: 'NBT Mulaqaat Media & Press Activation', category: 'Media & Press', featured: true },
  { id: 2, src: '/film/celeb_02.jpg', title: 'Sonakshi Sinha', subtitle: 'Akira Movie Launch & Media Interaction', category: 'Film Launches' },
  { id: 1, src: '/film/celeb_01.jpg', title: 'Divyenndu Sharma', subtitle: 'Artist Personal Branding & Interactive PR', category: 'Celebrity PR' },
  { id: 4, src: '/film/celeb_04.jpg', title: 'Randeep Hooda', subtitle: 'Actor PR & Promotional Session', category: 'Celebrity PR' },
  { id: 8, src: '/film/celeb_08.jpg', title: 'Arjun Kapoor', subtitle: 'Brand Collaboration & Media Interaction', category: 'Red Carpet & Brand' },
  { id: 9, src: '/film/celeb_09.jpg', title: 'Shraddha Kapoor & Tiger Shroff', subtitle: 'Baaghi Theatrical Promotion & Press Tour', category: 'Film Launches' },
  { id: 10, src: '/film/celeb_10.jpg', title: 'Sunny Deol', subtitle: 'Action Cinema Campaign & Movie PR', category: 'Film Launches' },
  { id: 18, src: '/film/celeb_18.jpg', title: 'Kriti Kharbanda', subtitle: 'Celebrity Press Conference & Media Tour', category: 'Celebrity PR' },
  { id: 13, src: '/film/celeb_13.jpg', title: 'Hrithik Roshan', subtitle: 'Personal Brand Building & Artist Relation', category: 'Celebrity PR' },
  { id: 16, src: '/film/celeb_16.jpg', title: 'Charlotte Flair (WWE Superstar)', subtitle: 'Sony Ten WWE India Tour & Media Activation', category: 'Media & Press' },
  { id: 17, src: '/film/celeb_17.jpg', title: 'Charlotte Flair (WWE Superstar)', subtitle: 'WWE India Campaign & Press Showcase', category: 'Media & Press' },
  { id: 26, src: '/film/celeb_26.jpg', title: 'Siddharth Malhotra', subtitle: 'Brand Association & Media Feature Session', category: 'Celebrity PR' },
  { id: 6, src: '/film/celeb_06.jpg', title: 'Gurmeet Choudhary', subtitle: 'Wajah Tum Ho Movie PR & Press Interaction', category: 'Film Launches' },
  { id: 24, src: '/film/celeb_24.jpg', title: 'Shraddha Kapoor', subtitle: 'Baaghi Media Interview & Publicity Tour', category: 'Film Launches' },
  { id: 29, src: '/film/celeb_29.jpg', title: 'Saif Ali Khan', subtitle: 'Celebrity Brand Association & Media Meet', category: 'Celebrity PR' },
  { id: 30, src: '/film/celeb_30.jpg', title: 'Kartik Aaryan', subtitle: 'Film Promotion & Press Relations Tour', category: 'Film Launches' },
  { id: 21, src: '/film/celeb_21.jpg', title: 'Jacqueline Fernandez', subtitle: 'Press Interaction & Audience Engagement', category: 'Media & Press' },
  { id: 33, src: '/film/celeb_33.jpg', title: 'Kiran Rao & Industry Leaders', subtitle: 'Bollywood Premiere Gala & Networking Event', category: 'Red Carpet & Brand' },
  { id: 12, src: '/film/celeb_12.jpg', title: 'Zee Cine Awards', subtitle: 'Red Carpet Premiere & Media Delegation', category: 'Red Carpet & Brand' },
  { id: 15, src: '/film/celeb_15.jpg', title: 'Hrithik Roshan', subtitle: 'Exclusive Brand & Entertainment PR Meet', category: 'Celebrity PR' },
];

export default function FilmGalleryShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = ['All', 'Film Launches', 'Celebrity PR', 'Media & Press', 'Red Carpet & Brand'];

  const filteredPhotos = activeCategory === 'All' 
    ? filmCampaigns 
    : filmCampaigns.filter(p => p.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos]);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <div className="mb-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eros-pink/10 border border-eros-pink/30 text-eros-pink text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-4 h-4" /> Real Campaign Footprint
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Celebrity PR & Film Highlights
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
          Explore our extensive track record of theatrical movie promotions, celebrity PR campaigns, press conferences, and high-impact brand activations across Bollywood and Indian cinema.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                isActive
                  ? 'bg-eros-pink text-white shadow-lg shadow-eros-pink/30 scale-105'
                  : 'bg-white dark:bg-eros-card text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-eros-border hover:border-eros-pink/40'
              }`}
            >
              {cat} {cat === 'All' ? `(${filmCampaigns.length})` : `(${filmCampaigns.filter(p => p.category === cat).length})`}
            </button>
          );
        })}
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(index)}
            className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1.5"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-950">
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Top Badge */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                  {photo.category}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-eros-pink/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg backdrop-blur-sm">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300"></div>

              {/* Card Details */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col justify-end">
                <h3 className="font-heading text-lg font-bold text-white leading-tight group-hover:text-eros-gold transition duration-300 mb-1">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {photo.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all border border-white/20 backdrop-blur-md"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={nextPhoto}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all border border-white/20 backdrop-blur-md"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Modal Image & Info */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl max-h-[90vh] flex flex-col items-center justify-center relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl max-h-[75vh]">
              <img
                src={filteredPhotos[selectedPhotoIndex].src}
                alt={filteredPhotos[selectedPhotoIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl"
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-eros-pink/20 text-eros-pink border border-eros-pink/40 mb-2">
                {filteredPhotos[selectedPhotoIndex].category}
              </span>
              <h3 className="font-heading text-2xl font-bold text-white mb-1">
                {filteredPhotos[selectedPhotoIndex].title}
              </h3>
              <p className="text-sm text-slate-300">
                {filteredPhotos[selectedPhotoIndex].subtitle}
              </p>
              <span className="text-xs text-slate-400 mt-2 block">
                {selectedPhotoIndex + 1} of {filteredPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
