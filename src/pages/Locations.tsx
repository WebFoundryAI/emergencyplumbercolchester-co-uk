import { Layout } from "@/components/layout/Layout";
import { LocationsGrid } from "@/components/sections/LocationsGrid";
import { CTASection } from "@/components/sections/CTASection";
import { RouteSEOHead } from "@/components/seo/RouteSEOHead";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Breadcrumbs } from "@/components/nav/Breadcrumbs";
import { BRAND } from "@/config/brand";
import { LOCATIONS } from "@/config/locations";
import { generateLocalBusinessSchema, generateLocationsListSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react";

const breadcrumbItems = [{ label: "Areas We Cover" }];

const Locations = () => {
  return (
    <Layout>
      <RouteSEOHead />
      <SchemaScript schema={[
        generateLocalBusinessSchema(),
        generateLocationsListSchema(LOCATIONS),
        generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Areas We Cover", url: "/locations" },
        ]),
      ]} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay py-16 md:py-20">
          <div className="container-wide px-4 text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Areas We Cover</h1>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              Professional Drainage Services Across Manchester &amp; Greater Manchester
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-wide px-4">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
              {BRAND.brandName} is proud to serve homeowners and businesses throughout {BRAND.serviceAreaLabel} and the surrounding areas. Whether you're dealing with a blocked drain in central Manchester or need emergency drainage services in Salford, our experienced team is just a phone call away.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer fast response times across all our service areas, with most call-outs attended within 1-2 hours. Our local knowledge means we understand the specific drainage challenges faced by properties in different parts of {BRAND.serviceAreaLabel}.
            </p>
          </div>
        </div>
      </section>

      {/* Manchester Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Manchester</h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              As our home base, Manchester is at the heart of everything we do. From the city centre to the surrounding residential areas including Didsbury, Chorlton, Fallowfield, and Rusholme, we provide comprehensive drainage solutions for properties of all sizes. Our team has extensive experience working with both Victorian terraces and modern developments, understanding the unique drainage systems each presents.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Manchester's mix of older clay pipes and modern plastic drainage means you need a team that can handle any situation. Whether it's tree root ingress in an older property or a simple blockage in a new build, we've got the equipment and expertise to resolve it quickly.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link 
                to="/locations/manchester/blocked-drains" 
                className="p-4 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Blocked Drains Manchester</h3>
                <p className="text-sm text-muted-foreground mt-2">Fast unblocking for homes &amp; businesses across Manchester</p>
              </Link>
              
              <Link 
                to="/locations/manchester/cctv-drain-surveys" 
                className="p-4 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">CCTV Surveys Manchester</h3>
                <p className="text-sm text-muted-foreground mt-2">Professional drain inspections with detailed reports</p>
              </Link>
              
              <Link 
                to="/locations/manchester/emergency-drain-services" 
                className="p-4 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Emergency Services Manchester</h3>
                <p className="text-sm text-muted-foreground mt-2">24/7 emergency drainage call-outs available</p>
              </Link>
            </div>

            <Link 
              to="/locations/manchester" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View all Manchester drainage services →
            </Link>
          </div>
        </div>
      </section>

      {/* Salford Section */}
      <section className="section-padding">
        <div className="container-wide px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Salford</h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Salford is a vibrant city with a mix of historic neighbourhoods and modern developments like MediaCityUK. We're proud to serve residents and businesses throughout Salford, from the traditional terraces in Eccles to the contemporary apartments in Salford Quays.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The city's growth over recent years means a mix of drainage systems, and we're fully equipped to handle everything from traditional clay pipe repairs to modern drainage installations. Our local presence means rapid response times for Salford residents – usually within the hour for emergencies.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link 
                to="/locations/salford/blocked-drains" 
                className="p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Blocked Drains Salford</h3>
                <p className="text-sm text-muted-foreground mt-2">Professional drain clearance throughout the city</p>
              </Link>
              
              <Link 
                to="/locations/salford/cctv-drain-surveys" 
                className="p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">CCTV Surveys Salford</h3>
                <p className="text-sm text-muted-foreground mt-2">Detailed drain inspections for homebuyers &amp; landlords</p>
              </Link>
              
              <Link 
                to="/locations/salford/emergency-drain-services" 
                className="p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Emergency Services Salford</h3>
                <p className="text-sm text-muted-foreground mt-2">Fast emergency response across Salford</p>
              </Link>
            </div>

            <Link 
              to="/locations/salford" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View all Salford drainage services →
            </Link>
          </div>
        </div>
      </section>

      {/* Stockport Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Stockport</h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Located south of Manchester, Stockport is a historic market town with a rich industrial heritage. We're proud to serve this charming community, from the historic town centre properties to the surrounding residential areas in Cheadle, Bramhall, and Hazel Grove.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Stockport's mix of Victorian properties and newer developments means drainage systems here face varied challenges. Our team understands the local infrastructure and can quickly diagnose and resolve issues, whether it's a blocked kitchen drain or a more complex sewage problem.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link 
                to="/locations/stockport/blocked-drains" 
                className="p-4 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Blocked Drains Stockport</h3>
                <p className="text-sm text-muted-foreground mt-2">Fast drain clearance for Stockport homes</p>
              </Link>
              
              <Link 
                to="/locations/stockport/cctv-drain-surveys" 
                className="p-4 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">CCTV Surveys Stockport</h3>
                <p className="text-sm text-muted-foreground mt-2">Professional inspections with video reports</p>
              </Link>
              
              <Link 
                to="/locations/stockport/emergency-drain-services" 
                className="p-4 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Emergency Services Stockport</h3>
                <p className="text-sm text-muted-foreground mt-2">24/7 emergency call-outs available</p>
              </Link>
            </div>

            <Link 
              to="/locations/stockport" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View all Stockport drainage services →
            </Link>
          </div>
        </div>
      </section>

      {/* Bolton Section */}
      <section className="section-padding">
        <div className="container-wide px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Bolton</h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Bolton is one of Greater Manchester's largest towns, known for its friendly community and strong industrial heritage. Located northwest of Manchester, we provide comprehensive drainage services to residents throughout the town and surrounding areas like Horwich and Farnworth.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Many Bolton properties rely on older drainage systems, and some properties have complex pipe networks dating back to the Victorian era. Our experienced team can handle all types of drainage work, from simple unblocking to more complex repair and relining services.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link 
                to="/locations/bolton/blocked-drains" 
                className="p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Blocked Drains Bolton</h3>
                <p className="text-sm text-muted-foreground mt-2">Reliable drain unblocking for Bolton</p>
              </Link>
              
              <Link 
                to="/locations/bolton/cctv-drain-surveys" 
                className="p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">CCTV Surveys Bolton</h3>
                <p className="text-sm text-muted-foreground mt-2">Detailed drain camera inspections</p>
              </Link>
              
              <Link 
                to="/locations/bolton/emergency-drain-services" 
                className="p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Emergency Services Bolton</h3>
                <p className="text-sm text-muted-foreground mt-2">Rapid emergency response available</p>
              </Link>
            </div>

            <Link 
              to="/locations/bolton" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View all Bolton drainage services →
            </Link>
          </div>
        </div>
      </section>

      {/* Oldham Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Oldham</h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Oldham sits on the edge of the Pennines, northeast of Manchester. This historic mill town is home to a mix of traditional stone-built terraces and modern housing developments. We're delighted to serve Oldham residents with professional drainage solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The town's hillside location and mix of older stone buildings mean drainage systems here face particular challenges, especially during wet weather. Our team has the expertise to deal with everything from routine blockages to more complex drainage issues.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link 
                to="/locations/oldham/blocked-drains" 
                className="p-4 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Blocked Drains Oldham</h3>
                <p className="text-sm text-muted-foreground mt-2">Expert drain clearance in Oldham</p>
              </Link>
              
              <Link 
                to="/locations/oldham/cctv-drain-surveys" 
                className="p-4 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">CCTV Surveys Oldham</h3>
                <p className="text-sm text-muted-foreground mt-2">Comprehensive drain inspections</p>
              </Link>
              
              <Link 
                to="/locations/oldham/emergency-drain-services" 
                className="p-4 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Emergency Services Oldham</h3>
                <p className="text-sm text-muted-foreground mt-2">24/7 emergency drainage help</p>
              </Link>
            </div>

            <Link 
              to="/locations/oldham" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View all Oldham drainage services →
            </Link>
          </div>
        </div>
      </section>

      {/* Didsbury Section */}
      <section className="section-padding">
        <div className="container-wide px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Didsbury</h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Didsbury is one of South Manchester's most desirable suburbs, known for its village atmosphere, excellent restaurants, and beautiful Victorian properties. We provide comprehensive drainage services throughout Didsbury, West Didsbury, and East Didsbury.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From the grand Victorian villas to the modern apartments, our team provides fast, professional drainage services throughout Didsbury. We're familiar with the local infrastructure and can respond quickly to any drainage emergency.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link 
                to="/locations/didsbury/blocked-drains" 
                className="p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Blocked Drains Didsbury</h3>
                <p className="text-sm text-muted-foreground mt-2">Quick drain unblocking in Didsbury</p>
              </Link>
              
              <Link 
                to="/locations/didsbury/cctv-drain-surveys" 
                className="p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">CCTV Surveys Didsbury</h3>
                <p className="text-sm text-muted-foreground mt-2">Professional drain camera surveys</p>
              </Link>
              
              <Link 
                to="/locations/didsbury/emergency-drain-services" 
                className="p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Emergency Services Didsbury</h3>
                <p className="text-sm text-muted-foreground mt-2">Fast emergency response times</p>
              </Link>
            </div>

            <Link 
              to="/locations/didsbury" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View all Didsbury drainage services →
            </Link>
          </div>
        </div>
      </section>

      {/* Other Areas Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Other Areas We Serve</h2>
            <p className="text-lg text-muted-foreground">
              Beyond our main service areas, we cover numerous towns and neighbourhoods across {BRAND.serviceAreaLabel}. Click on any location below to see our full range of services available in your area.
            </p>
          </div>
        </div>
        <LocationsGrid showAll />
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-wide px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Choose a Local Drainage Company?</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Faster Response Times</h3>
                  <p className="text-muted-foreground">Being based in {BRAND.serviceAreaLabel} means we can reach you quickly – often within the hour for emergencies.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Local Knowledge</h3>
                  <p className="text-muted-foreground">We understand the specific drainage systems and common issues in properties across {BRAND.serviceAreaLabel}.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">No Call-Out Charges</h3>
                  <p className="text-muted-foreground">As a local company, we don't charge excessive call-out fees. You only pay for the work we do.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Building Local Trust</h3>
                  <p className="text-muted-foreground">Our reputation is built on recommendations from satisfied customers in your community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/5">
        <div className="container-wide px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Your Drains Sorted?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Whether you're in Manchester, Salford, or anywhere across Greater Manchester, our local team is just a phone call away.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call us now on {BRAND.phone}
            </Link>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide px-4 text-center">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="text-primary hover:underline">
              Home
            </Link>
            {" · "}
            <Link to="/services" className="text-primary hover:underline">
              All Services
            </Link>
            {" · "}
            <Link to="/contact" className="text-primary hover:underline">
              Contact Us
            </Link>
            {" · "}
            <Link to="/faq" className="text-primary hover:underline">
              FAQs
            </Link>
          </p>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Locations;
