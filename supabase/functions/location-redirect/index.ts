/**
 * Edge function to handle 301 redirects from /location/* to /locations/*
 * 
 * This implements a permanent URL migration:
 * - /location/swindon -> 301 -> /locations/swindon
 * - /location/swindon/drain-jetting -> 301 -> /locations/swindon/drain-jetting
 * - Preserves query parameters
 * - Single hop redirect (no chains)
 */

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const BASE_URL = "https://swindonblockeddrains.co.uk";

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const pathname = url.pathname;
    const searchParams = url.search; // Includes the ? if present
    
    console.log(`Redirect request received: ${pathname}${searchParams}`);

    // Check if this is a /location/ path that needs redirecting
    // The edge function is called via /location-redirect, so we need to extract
    // the actual path from the request
    const pathAfterFunction = pathname.replace(/^\/location-redirect\/?/, "");
    
    if (pathAfterFunction) {
      // Build the new /locations/ URL
      const newPath = `/locations/${pathAfterFunction}`;
      const redirectUrl = `${BASE_URL}${newPath}${searchParams}`;
      
      console.log(`301 Redirect: /location/${pathAfterFunction} -> ${redirectUrl}`);
      
      return new Response(null, {
        status: 301,
        headers: {
          ...corsHeaders,
          "Location": redirectUrl,
          "Cache-Control": "public, max-age=31536000", // Cache for 1 year (permanent redirect)
        },
      });
    }

    // If no path provided, redirect to /locations/
    const redirectUrl = `${BASE_URL}/locations/${searchParams}`;
    console.log(`301 Redirect: /location/ -> ${redirectUrl}`);
    
    return new Response(null, {
      status: 301,
      headers: {
        ...corsHeaders,
        "Location": redirectUrl,
        "Cache-Control": "public, max-age=31536000",
      },
    });
  } catch (error) {
    console.error("Redirect error:", error);
    return new Response("Error processing redirect", {
      status: 500,
      headers: corsHeaders,
    });
  }
});
