import { Link } from "react-router-dom";
import { SERVICES } from "@/config/services";
import { LOCATIONS } from "@/config/locations";

interface BlogPost {
  slug: string;
  title: string;
}

interface PopularLinksProps {
  recentPosts?: BlogPost[];
}

export function PopularLinks({ recentPosts = [] }: PopularLinksProps) {
  const topServices = SERVICES.slice(0, 3);
  const topLocations = LOCATIONS.slice(0, 3);

  return (
    <div className="border-t border-background/20 pt-8 mt-8">
      <h4 className="font-semibold mb-4 text-center">Popular Links</h4>
      {/* Mobile: vertical list with touch targets - FIXED: /70 → /85 */}
      <div className="flex flex-col md:hidden gap-0 text-sm">
        {topServices.map((service) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="text-background/85 hover:text-accent transition-colors min-h-[48px] py-3 flex items-center justify-center"
          >
            {service.name}
          </Link>
        ))}
        {topLocations.map((location) => (
          <Link
            key={location.slug}
            to={`/locations/${location.slug}`}
            className="text-background/85 hover:text-accent transition-colors min-h-[48px] py-3 flex items-center justify-center"
          >
            {location.name}
          </Link>
        ))}
        {recentPosts.slice(0, 3).map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="text-background/85 hover:text-accent transition-colors min-h-[48px] py-3 flex items-center justify-center"
          >
            {post.title}
          </Link>
        ))}
      </div>
      {/* Desktop: horizontal with separators - FIXED: /70 → /85 */}
      <div className="hidden md:flex flex-wrap justify-center gap-3 text-sm">
        {topServices.map((service) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="text-background/85 hover:text-accent transition-colors"
          >
            {service.name}
          </Link>
        ))}
        <span className="text-background/40">•</span>
        {topLocations.map((location) => (
          <Link
            key={location.slug}
            to={`/locations/${location.slug}`}
            className="text-background/85 hover:text-accent transition-colors"
          >
            {location.name}
          </Link>
        ))}
        {recentPosts.length > 0 && (
          <>
            <span className="text-background/40">•</span>
            {recentPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="text-background/85 hover:text-accent transition-colors"
              >
                {post.title}
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
