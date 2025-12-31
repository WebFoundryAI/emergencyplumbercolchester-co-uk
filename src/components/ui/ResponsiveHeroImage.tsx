import { useState, useEffect } from "react";

// Import hero images at different sizes
import heroBgFull from "@/assets/hero-bg.webp";

interface ResponsiveHeroImageProps {
  className?: string;
  priority?: boolean;
}

/**
 * Responsive hero background component.
 * Uses CSS background-image with responsive sizing.
 * For true srcset support, we'd need multiple image sizes generated at build time.
 * This component optimizes loading by:
 * 1. Using webp format (already optimized)
 * 2. Preloading on high-priority
 * 3. Using CSS object-fit for responsive sizing
 */
export function ResponsiveHeroImage({ 
  className = "",
  priority = true 
}: ResponsiveHeroImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (priority) {
      // Preload the image for LCP optimization
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = heroBgFull;
      link.type = "image/webp";
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
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
      
      {/* Main hero image */}
      <img
        src={heroBgFull}
        alt=""
        role="presentation"
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        // Responsive sizing hints for browser
        sizes="100vw"
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
