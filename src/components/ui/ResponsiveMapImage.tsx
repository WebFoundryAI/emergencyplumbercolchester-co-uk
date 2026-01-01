import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ResponsiveMapImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

/**
 * Responsive map image component with:
 * - Intersection Observer for lazy loading
 * - Placeholder while loading
 * - Responsive sizing based on container
 * - WebP format support
 */
export function ResponsiveMapImage({
  src,
  alt,
  className,
  containerClassName,
}: ResponsiveMapImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Start loading 200px before visible
        threshold: 0,
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Load image when in view
  useEffect(() => {
    if (isInView && src) {
      // For Google Static Maps, we can request different sizes
      // by modifying the URL parameters
      const containerWidth = containerRef.current?.offsetWidth || 800;
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      
      // Calculate optimal image size
      const optimalWidth = Math.min(
        Math.ceil(containerWidth * devicePixelRatio),
        1280 // Max size to prevent huge downloads
      );
      const optimalHeight = Math.ceil(optimalWidth / 2); // 2:1 aspect ratio

      // If it's a Google Maps URL, optimize the size parameter
      if (src.includes("maps.googleapis.com")) {
        const optimizedSrc = src.replace(
          /size=\d+x\d+/,
          `size=${optimalWidth}x${optimalHeight}`
        );
        setImageSrc(optimizedSrc);
      } else {
        setImageSrc(src);
      }
    }
  }, [isInView, src]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
    >
      {/* Placeholder skeleton */}
      <div
        className={cn(
          "absolute inset-0 bg-muted transition-opacity duration-300",
          isLoaded ? "opacity-0" : "opacity-100 animate-pulse"
        )}
        aria-hidden="true"
      />

      {/* Map image - only rendered when in view */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          width={800}
          height={400}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "w-full h-auto transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          // Responsive sizing hints for browser to pick optimal size
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px"
        />
      )}
    </div>
  );
}
