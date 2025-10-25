import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";

const ResourcesIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Resources | IPMTTI"
        description="Explore IPMTTI resources including our blog and frequently asked questions (FAQ)."
        keywords="IPMTTI resources, blog, FAQ, technical training Kenya, vocational education"
        canonical="/resources"
      />
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
              <p className="text-lg text-muted-foreground">Insights, updates, and helpful information for students and partners.</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              <a href="/resources/blog" className="group">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/30">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary">Blog</h2>
                    <p className="text-muted-foreground">Articles on programs, admissions tips, career pathways, and campus life.</p>
                  </CardContent>
                </Card>
              </a>

              <a href="/resources/faq" className="group">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/30">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary">FAQ</h2>
                    <p className="text-muted-foreground">Answers to common questions about accreditation, courses, fees, and more.</p>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesIndex;
