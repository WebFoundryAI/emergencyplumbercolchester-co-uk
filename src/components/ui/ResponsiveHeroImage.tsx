import { useState, useEffect } from "react";

// Import hero image - Vite resolves this to the hashed URL
import heroBgFull from "@/assets/hero-bg.webp";

interface ResponsiveHeroImageProps {
  className?: string;
  priority?: boolean;
}

/**
 * Responsive hero background component with optimized loading.
 * Uses the existing WebP image with responsive sizing via CSS.
 * 
 * LCP Optimization:
 * - Injects <link rel="preload"> with the correct Vite-resolved URL
 * - Uses fetchPriority="high" for immediate resource prioritization
 * - Syncs decoding to prevent layout shifts
 */
export function ResponsiveHeroImage({ 
  className = "",
  priority = true 
}: ResponsiveHeroImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Inject preload link for LCP optimization (uses resolved asset URL)
  useEffect(() => {
    if (priority && typeof document !== 'undefined') {
      // Check if preload link already exists
      const existingLink = document.querySelector(`link[href="${heroBgFull}"]`);
      if (existingLink) return;

      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = heroBgFull;
      link.type = "image/webp";
      // fetchpriority attribute for modern browsers
      link.setAttribute("fetchpriority", "high");
      document.head.appendChild(link);
      
      return () => {
        if (link.parentNode) {
          document.head.removeChild(link);
        }
      };
    }
  }, [priority]);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Low-quality placeholder for instant display */}
      <div 
        className={`absolute inset-0 bg-muted transition-opacity duration-300 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      />
      
      {/* Picture element for format fallback support */}
      <picture className="absolute inset-0 w-full h-full">
        {/* WebP source - primary format */}
        <source
          type="image/webp"
          srcSet={heroBgFull}
          sizes="100vw"
        />
        {/* Fallback img element with LCP optimizations */}
        <img
          src={heroBgFull}
          alt=""
          role="presentation"
          width={1920}
          height={1080}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setIsLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
        />
      </picture>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
