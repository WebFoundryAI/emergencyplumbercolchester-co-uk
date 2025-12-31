import { lazy, Suspense } from "react";
import { LocationConfig } from "@/config/locations";

const MapSection = lazy(() =>
  import("@/components/sections/MapSection").then((m) => ({
    default: m.MapSection,
  }))
);

interface LazyMapSectionProps {
  location: LocationConfig;
}

function MapPlaceholder() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide px-4">
        <div className="text-center mb-8 animate-pulse">
          <div className="h-8 bg-muted rounded w-64 mx-auto mb-2" />
          <div className="h-5 bg-muted rounded w-48 mx-auto" />
        </div>
        <div className="relative rounded-xl overflow-hidden max-w-4xl mx-auto aspect-[2/1] bg-muted animate-pulse" />
      </div>
    </section>
  );
}

export function LazyMapSection(props: LazyMapSectionProps) {
  return (
    <Suspense fallback={<MapPlaceholder />}>
      <MapSection {...props} />
    </Suspense>
  );
}
