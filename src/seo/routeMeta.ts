/**
 * Centralized route metadata for SEO
 * Each route has: title, description, canonicalPath, robots
 * 
 * Canonical rules:
 * - Homepage: "/" 
 * - All other routes: NO trailing slash
 * - Base domain: https://manchesterblockeddrains.co.uk
 */

import { BRAND } from "@/config/brand";

export interface RouteMeta {
  title: string;
  description: string;
  canonicalPath: string;
  robots: string;
  ogImage?: string;
  noIndex?: boolean;
}

const BASE_URL = `https://${BRAND.domain}`;
const DEFAULT_OG_IMAGE = `${BASE_URL}/og/manchesterblockeddrains-og.jpg`;

// Routes that should not be indexed
const NOINDEX_ROUTES = [
  "/admin",
  "/login",
  "/reset-password",
  "/auth",
  "/dashboard",
];

export function shouldNoIndex(pathname: string): boolean {
  const normalizedPath = pathname.toLowerCase().replace(/\/+$/, "");
  return NOINDEX_ROUTES.some(
    (route) => normalizedPath === route || normalizedPath.startsWith(`${route}/`)
  );
}

/**
 * Normalize canonical path: no trailing slash except homepage
 */
export function normalizeCanonicalPath(path: string): string {
  if (path === "/" || path === "") return "/";
  return path.replace(/\/+$/, "");
}

/**
 * Get full canonical URL
 */
export function getCanonicalUrl(pathname: string): string {
  return `${BASE_URL}${normalizeCanonicalPath(pathname)}`;
}

/**
 * Static route metadata map
 * Dynamic routes (with params) are handled in getSeoForRoute()
 */
export const STATIC_ROUTE_META: Record<string, Omit<RouteMeta, "canonicalPath" | "robots">> = {
  "/": {
    title: "Blocked Drains Manchester | 24/7 Local Drain Unblocking",
    description: "Professional drain unblocking in Manchester. Emergency call-outs, CCTV surveys, drain repairs. No call-out fee, fixed pricing. Call 0333 880 2296.",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/services": {
    title: "Drainage Services Manchester | All Drain Solutions",
    description: "Complete drainage services in Manchester. Blocked drains, CCTV surveys, drain jetting, and 24/7 emergency callouts. No call-out fee. Get a quote today.",
  },
  "/locations": {
    title: "Areas We Cover | Drain Services Near Manchester",
    description: "Drainage services across Manchester and surrounding areas including Salford, Stockport, Bolton, Oldham, and Rochdale. Find your area.",
  },
  "/about": {
    title: "About Us | Manchester Drainage Specialists",
    description: "Meet Blocked Drains Manchester, your trusted local drainage experts. Reliable, professional service available 24/7 across Manchester and surrounding areas.",
  },
  "/contact": {
    title: "Contact Us | Get a Free Quote in Manchester",
    description: "Contact Blocked Drains Manchester for a free quote. Call 0333 880 2296 or use our online form. Fast response for all drainage enquiries.",
  },
  "/faq": {
    title: "FAQs | Drain Services Questions Answered",
    description: "Common questions about drainage services in Manchester answered. Learn about costs, response times, what's included, and when to call a professional.",
  },
  "/blog": {
    title: "Drainage Tips & Advice | Manchester Expert Blog",
    description: "Expert drainage advice from Manchester specialists. Tips to prevent blocked drains, maintain your drainage system, and know when to call for help.",
  },
  "/sitemap": {
    title: "Sitemap | Blocked Drains Manchester",
    description: "Browse all pages on Blocked Drains Manchester. Find drainage services, local areas, blog articles, and contact information.",
    noIndex: true,
  },
  "/privacy": {
    title: "Privacy Policy | Blocked Drains Manchester",
    description: "Privacy policy for Blocked Drains Manchester. Learn how we collect, use, and protect your personal information when using our services.",
  },
  "/terms": {
    title: "Terms of Service | Blocked Drains Manchester",
    description: "Terms and conditions for Blocked Drains Manchester drainage services. Read before booking our drain unblocking and survey services.",
  },
  "/cookies": {
    title: "Cookie Policy | Blocked Drains Manchester",
    description: "Cookie policy for Blocked Drains Manchester website. Learn about the cookies we use and how to manage your preferences.",
  },
};

/**
 * Service-specific SEO metadata
 */
export const SERVICE_META: Record<string, { title: string; description: string }> = {
  "blocked-drains": {
    title: "Blocked Drains Manchester | 24/7 Drain Clearing",
    description: "Fast blocked drain clearance in Manchester. Our local engineers use professional equipment to clear all blockages. No call-out fee, fixed prices.",
  },
  "drain-unblocking": {
    title: "Drain Unblocking Manchester | Sinks, Toilets & Baths",
    description: "Expert drain unblocking across Manchester. We clear blocked sinks, toilets, baths, and showers fast. No call-out charges, fixed pricing guaranteed.",
  },
  "cctv-drain-surveys": {
    title: "CCTV Drain Surveys Manchester | HD Camera Inspections",
    description: "Professional CCTV drain surveys in Manchester with detailed video reports. Identify blockages, damage, and root ingress accurately. Book today.",
  },
  "drain-jetting": {
    title: "Drain Jetting Manchester | High-Pressure Cleaning",
    description: "Powerful high-pressure drain jetting in Manchester. Clears stubborn blockages, fat buildup, and debris. Safe for all pipe types. Book now.",
  },
  "emergency-drain-services": {
    title: "Emergency Drains Manchester | 24/7 Callouts",
    description: "24/7 emergency drain services across Manchester. Rapid response to flooding, sewage backups, and urgent blockages. Call us day or night.",
  },
};

/**
 * Sub-service SEO metadata
 */
export const SUBSERVICE_META: Record<string, { title: string; description: string }> = {
  "blocked-toilet": {
    title: "Blocked Toilet Manchester | Fast Unblocking Service",
    description: "Blocked toilet in Manchester? We clear toilet blockages quickly and hygienically. Same-day service, no call-out fee. Domestic and commercial.",
  },
  "blocked-sink": {
    title: "Blocked Sink Manchester | Fast Local Unblocking",
    description: "Blocked sink in Manchester? Our local drainage experts clear kitchen and bathroom sinks fast. No call-out fee, fixed pricing. Call now.",
  },
  "blocked-bath": {
    title: "Blocked Bath & Shower Manchester | Drainage Experts",
    description: "Bath or shower blocked in Manchester? We clear standing water and slow drains fast. Wet rooms and ensuites included. Fixed pricing.",
  },
  "external-drain-unblocking": {
    title: "External Drain Unblocking Manchester | Outside Drains",
    description: "Blocked outside drain in Manchester? We clear external drains, gullies, and manholes professionally. Prevent flooding and odours.",
  },
  "internal-drain-unblocking": {
    title: "Internal Drain Unblocking Manchester | Inside Drains",
    description: "Internal drain problems in Manchester? We unblock drains throughout your property quickly. Minimal disruption, professional service.",
  },
  "pre-purchase-survey": {
    title: "Pre-Purchase Drain Survey Manchester | Homebuyers",
    description: "Buying a home in Manchester? Get a CCTV drain survey before you commit. Reveals hidden problems, structural issues, and repair costs.",
  },
  "drainage-investigation": {
    title: "Drainage Investigation Manchester | Problem Diagnosis",
    description: "Recurring drain issues in Manchester? Our detailed investigations find the root cause using CCTV and professional expertise.",
  },
  "domestic-jetting": {
    title: "Domestic Drain Jetting Manchester | Home Services",
    description: "High-pressure drain jetting for Manchester homes. Clears fat, grease, and root ingress safely. Professional equipment, no mess.",
  },
  "commercial-jetting": {
    title: "Commercial Drain Jetting Manchester | Business Services",
    description: "Industrial-strength drain jetting for Manchester businesses. Restaurants, offices, and retail. Minimise downtime with fast service.",
  },
  "flooding-emergency": {
    title: "Flooding Emergency Manchester | Rapid Response",
    description: "Flooding emergency in Manchester? We respond fast to drain-related flooding. Pumping, clearance, and repairs. Available 24/7.",
  },
  "sewage-emergency": {
    title: "Sewage Emergency Manchester | Urgent Response",
    description: "Sewage backup in Manchester? We handle sewage emergencies safely and hygienically. 24/7 urgent response. Call immediately.",
  },
};
