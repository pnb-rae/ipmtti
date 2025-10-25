import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import React from "react";

type ArticleLayoutProps = {
  title: string;
  date: string;
  category: string;
  image: string;
  description?: string;
  canonical?: string;
  children: React.ReactNode;
};

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ title, date, category, image, description, canonical, children }) => {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <SEOHead title={title} description={description ?? undefined} canonical={canonical ?? undefined} ogImage={image} />
      <Header />

      {/* Hero */}
      <section className="relative">
        <img src={image} alt={title} className="w-full h-[340px] md:h-[460px] object-cover" loading="eager" decoding="async" fetchPriority="high" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
          <div className="mb-2 text-xs uppercase tracking-wide">
            <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded mr-2">{category}</span>
            <span className="opacity-90">{date}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight font-serif">{title}</h1>
        </div>
      </section>

      {/* Body */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <article className="scroll-reveal mx-auto max-w-[760px] leading-8 prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-h2:mt-12 prose-h3:mt-10 prose-p:text-muted-foreground prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-4 prose-blockquote:italic">
            {children}
          </article>
          {/* JSON-LD: Article */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: title,
                datePublished: date,
                image: [image],
                articleSection: category,
                description: description || title,
                mainEntityOfPage: canonical || (typeof window !== 'undefined' ? window.location.pathname : undefined),
              }),
            }}
          />
          {/* JSON-LD: Breadcrumbs for Article */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                  { "@type": "ListItem", position: 2, name: "Resources", item: "/resources" },
                  { "@type": "ListItem", position: 3, name: "Blog", item: "/resources/blog" },
                  { "@type": "ListItem", position: 4, name: title, item: canonical || (typeof window !== 'undefined' ? window.location.pathname : undefined) },
                ],
              }),
            }}
          />
          <div className="mx-auto max-w-[760px] px-4 mt-10 flex items-center justify-between">
            <a href="/resources/blog" className="text-sm text-primary hover:underline">← Back to Blog</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticleLayout;
