'use client';

import { useEffect } from 'react';

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  // Close on Esc key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm animate-fade-in overflow-auto"
      onClick={onClose}
    >
      <div className="relative max-w-7xl w-full my-auto">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}
