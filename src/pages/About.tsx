import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { RouteSEOHead } from "@/components/seo/RouteSEOHead";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { BRAND } from "@/config/brand";
import { ABOUT_CONTENT } from "@/config/staticContent";
import { generateOrganizationSchema, generateBreadcrumbSchema, generateAboutPageSchema, generateLocalBusinessSchema } from "@/lib/schema";
import { Users, Clock, Shield } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <RouteSEOHead />
      <SchemaScript schema={[
        generateAboutPageSchema(),
        generateOrganizationSchema(),
        generateLocalBusinessSchema(),
        generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]),
      ]} />
      <section className="hero-section">
        <div className="hero-overlay py-16 md:py-20">
          <div className="container-wide px-4 text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About {BRAND.brandName}</h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Your trusted drainage specialists serving {BRAND.serviceAreaLabel}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Trusted Drainage Specialists in {BRAND.serviceAreaLabel}</h2>
            {ABOUT_CONTENT.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-muted-foreground mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-muted/50 rounded-xl">
              <Users className="h-10 w-10 mx-auto text-primary mb-4" />
              <h3 className="font-bold mb-2">Experienced Team</h3>
              <p className="text-sm text-muted-foreground">
                Fully trained and insured engineers
              </p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-xl">
              <Clock className="h-10 w-10 mx-auto text-primary mb-4" />
              <h3 className="font-bold mb-2">24/7 Available</h3>
              <p className="text-sm text-muted-foreground">
                Emergency service when you need it
              </p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-xl">
              <Shield className="h-10 w-10 mx-auto text-primary mb-4" />
              <h3 className="font-bold mb-2">Fully Insured</h3>
              <p className="text-sm text-muted-foreground">
                Complete peace of mind guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
