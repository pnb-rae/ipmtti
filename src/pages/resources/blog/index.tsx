import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useMemo, useState } from "react";
// Real project images
import imgFrontHero from "@/assets/front-page-hero.jpg";
import imgClassroomTraining from "@/assets/gallery/classroom-training.jpg";
import imgExcavatorFemale from "@/assets/gallery/excavator-female-operator.jpg";
import imgMotorGrader from "@/assets/gallery/motor-grader-training.jpg";
import imgForklift from "@/assets/forklift-training.jpg";
import imgGraduationGroup from "@/assets/gallery/graduation-group-outdoor.jpg";
import imgDiverseTraining from "@/assets/diverse-training.jpg";
import imgGraduationCertificate from "@/assets/gallery/graduation-certificate-ceremony.jpg";
import imgCampusBuilding from "@/assets/gallery/campus-building.jpg";
import imgEquipmentYardAerial from "@/assets/gallery/equipment-yard-aerial.jpg";

const BlogIndex = () => {
  // Featured story (hero)
  const featured = {
    title: "Empowering Kenya’s Future: Inside IPMTTI’s Technical Excellence Journey",
    category: "Campus Life",
    date: "October 10, 2025",
    excerpt:
      "Discover how IPMTTI is transforming technical education through hands-on training and modern machinery.",
    image: imgClassroomTraining,
  };

  // Article cards dataset
  const allPosts = [
    {
      title: "What to Expect in Plant Operator Training",
      category: "Technical Courses",
      date: "Jan 5, 2025",
      excerpt:
        "From excavators to forklifts, here’s how you’ll build confidence operating heavy machinery the right way.",
      image: imgMotorGrader,
      slug: "/resources/blog/plant-operator-training-expect",
    },
    {
      title: "Top 5 Welding Careers You Can Pursue After Graduation",
      category: "Career Tips",
      date: "Mar 15, 2025",
      excerpt:
        "Explore high-demand welding paths across construction, manufacturing, and specialized fabrication.",
      image: "/images/blog/blog-2.jpg",
      slug: "/resources/blog/welding-careers",
    },
    {
      title: "Safety First: Why Equipment Training Matters",
      category: "Safety & Standards",
      date: "Feb 2, 2025",
      excerpt:
        "Certified safety practices reduce downtime, protect teams, and extend machine lifespan.",
      image: imgForklift,
      slug: "/resources/blog/safety-equipment-training-matters",
    },
    {
      title: "Women Breaking Barriers in Heavy Machinery",
      category: "Inspiration",
      date: "Apr 8, 2025",
      excerpt:
        "Meet trailblazers redefining what’s possible in plant operation and engineering across Kenya.",
      image: imgExcavatorFemale,
      slug: "/resources/blog/women-breaking-barriers",
    },
    {
      title: "How to Choose the Right Technical Course",
      category: "Guides & Advice",
      date: "Jan 15, 2025",
      excerpt:
        "Match your strengths with market demand to make a confident, rewarding training decision.",
      image: "/images/blog/blog-1.jpg",
      slug: "/resources/blog/choose-technical-course",
    },
    {
      title: "Student Stories: From Classroom to Site",
      category: "Student Stories",
      date: "May 20, 2025",
      excerpt:
        "Graduates share how IPMTTI prepared them for real-world roles across industries.",
      image: "/images/blog/blog-3.jpg",
      slug: "/resources/blog/student-stories-classroom-to-site",
    },
    {
      title: "Accreditation: NITA, NTSA, and KNEC Explained",
      category: "Safety & Standards",
      date: "Oct 16, 2025",
      excerpt:
        "Why accreditation guarantees your certificate’s recognition and your legal pathway to work.",
      image: imgEquipmentYardAerial,
      slug: "/resources/blog/accreditation-nita-ntsa-knec",
    },
  ];

  // Category filter + pagination
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [query, setQuery] = useState<string>("");
  const [pendingQuery, setPendingQuery] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const filteredPosts = useMemo(() => {
    const byCategory = activeCategory === "All" ? allPosts : allPosts.filter((p) => p.category === activeCategory);
    const q = query.trim().toLowerCase();
    if (!q) return byCategory;
    return byCategory.filter((p) =>
      [p.title, p.excerpt, p.category].some((t) => (t || "").toLowerCase().includes(q))
    );
  }, [activeCategory, allPosts, query]);

  const visiblePosts = useMemo(() => filteredPosts.slice(0, visibleCount), [filteredPosts, visibleCount]);

  const handleLoadMore = () => setVisibleCount((c) => c + 6);

  // Compute ranked matches for suggestions (searches across all posts, not just active category)
  const rankedMatches = useMemo(() => {
    const q = pendingQuery.trim().toLowerCase();
    if (!q) return [] as { post: typeof allPosts[number]; score: number }[];
    return allPosts
      .map((p) => ({
        post: p,
        score:
          (p.title.toLowerCase().startsWith(q) ? 3 : 0) +
          (p.title.toLowerCase().includes(q) ? 2 : 0) +
          ([p.excerpt, p.category].some((t) => (t || "").toLowerCase().includes(q)) ? 1 : 0),
      }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [pendingQuery, allPosts]);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const q = pendingQuery.trim().toLowerCase();
    if (!q) return;
    // If exactly one strong match, navigate directly; otherwise reveal suggestions and filter
    if (rankedMatches.length === 1 && rankedMatches[0].post.slug) {
      window.location.href = rankedMatches[0].post.slug as string;
      return;
    }
    setQuery(pendingQuery); // show filtered results below while suggestions are visible
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('q', pendingQuery);
      window.history.replaceState({}, '', url.toString());
    } catch {}
  };

  // Initialize search from URL (?q=)
  if (typeof window !== 'undefined') {
    // lightweight sync init; safe in client-only route
    const params = new URLSearchParams(window.location.search);
    const q0 = params.get('q') || '';
    if (q0 && pendingQuery === '' && query === '') {
      // initialize once
      setPendingQuery(q0);
      setQuery(q0);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Blog: Articles, Guides & Campus Stories | IPMTTI Thika"
        description="IPMTTI Blog — expert guides, student stories, safety & accreditation insights, and technical training tips from Thika, Kenya."
        keywords="IPMTTI blog, Thika technical training, vocational education Kenya, NITA NTSA KNEC, plant operator, welding, admissions, safety"
        canonical="/resources/blog"
      />
      <Header />
      <main>
        {/* Hero with featured image at the very top */}
        <section className="relative overflow-hidden min-h-[48vh] md:min-h-[60vh]">
          {/* Featured image background */}
          <img
            src={featured.image}
            alt="Featured"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            sizes="100vw"
          />
          {/* Overlay gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 md:from-black/60" />
          <div className="relative container mx-auto px-4 py-12 md:py-24 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">{featured.title}</h1>
            <p className="mt-3 md:mt-4 text-base md:text-lg max-w-3xl mx-auto">
              {featured.excerpt}
            </p>
          </div>
        </section>

        {/* Stories header + search section below hero */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-10 md:py-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-amber-800 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-500" /> IPMTTI Blog
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-[#6f6a3a] via-[#9b8d3b] to-[#6f6a3a] bg-clip-text text-transparent">
              Stories, Guides & Campus Life
            </h2>
            <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights from students, instructors, and industry partners to help you thrive.
            </p>
            <div className="mt-6 flex items-center justify-center">
              <form className="relative w-full max-w-xl" onSubmit={handleSearchSubmit}>
                <input
                  aria-label="Search blog posts"
                  placeholder="Search topics, e.g. welding, plant operator, safety..."
                  value={pendingQuery}
                  onChange={(e) => { setPendingQuery(e.target.value); setActiveIndex(0); }}
                  onKeyDown={(e) => {
                    const n = rankedMatches.length;
                    if (!n) return;
                    if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      setActiveIndex((i) => (i + 1) % n);
                    } else if (e.key === 'ArrowUp') {
                      e.preventDefault();
                      setActiveIndex((i) => (i - 1 + n) % n);
                    } else if (e.key === 'Enter') {
                      const m = rankedMatches[activeIndex];
                      if (m && m.post.slug) {
                        e.preventDefault();
                        window.location.href = m.post.slug as string;
                      }
                    } else if (e.key === 'Escape') {
                      setActiveIndex(-1);
                    }
                  }}
                  className="w-full rounded-xl border bg-white/70 backdrop-blur px-4 py-3 pr-10 shadow-sm outline-none ring-1 ring-amber-100 focus:ring-2 focus:ring-amber-300"
                />
                {(pendingQuery || query) && (
                  <button
                    type="button"
                    aria-label="Clear search"
                    onClick={() => {
                      setPendingQuery("");
                      setQuery("");
                    }}
                    className="absolute right-12 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-8 w-8 rounded-md text-amber-700 hover:text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                )}
                <button
                  type="submit"
                  aria-label="Search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-8 w-8 rounded-md bg-amber-500 text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>

                {/* Suggestions panel */}
                {pendingQuery.trim() && rankedMatches.length > 0 && (
                  <div className="absolute z-10 mt-2 w-full rounded-xl border bg-white/95 backdrop-blur shadow-lg overflow-hidden max-h-[70vh]">
                    <ul className="max-h-80 overflow-auto divide-y">
                      {rankedMatches.slice(0, 6).map(({ post }, idx) => (
                        <li key={post.title}>
                          {post.slug ? (
                            <a
                              href={post.slug}
                              className={`flex items-start gap-3 px-4 py-3 hover:bg-amber-50 ${idx === activeIndex ? 'bg-amber-50' : ''}`}
                            >
                              <div className="min-w-0">
                                <div className="font-medium truncate">{post.title}</div>
                                <div className="text-xs text-muted-foreground truncate">{post.category} • {post.date}</div>
                              </div>
                            </a>
                          ) : (
                            <div className={`flex items-start gap-3 px-4 py-3 opacity-80 ${idx === activeIndex ? 'bg-amber-50' : ''}`}>
                              <div className="min-w-0">
                                <div className="font-medium truncate">{post.title}</div>
                                <div className="text-xs text-muted-foreground truncate">{post.category} • {post.date}</div>
                              </div>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                    {rankedMatches.length > 6 && (
                      <div className="px-4 py-2 text-xs text-muted-foreground">Showing top results — refine your search to narrow down.</div>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl space-y-10">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "All",
                "Campus Life",
                "Technical Courses",
                "Career Tips",
                "Safety & Standards",
                "Student Stories",
                "Guides & Advice",
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm transition-all shadow-sm ring-1 backdrop-blur ${
                    activeCategory === cat
                      ? "bg-amber-500 text-white ring-amber-500 shadow hover:shadow-md"
                      : "bg-white/70 text-foreground ring-amber-100 hover:bg-white hover:shadow"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured Story removed from this section as it's now in the hero */}

            {/* Article Grid or Empty State */}
            {visiblePosts.length === 0 ? (
              <div className="text-center py-12 border rounded-xl bg-white/60">
                <h3 className="text-xl font-semibold">No results found</h3>
                <p className="mt-2 text-muted-foreground">Try a different search term or category.</p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <button
                    className="px-4 py-2 rounded-md border"
                    onClick={() => setQuery("")}
                  >
                    Clear filters
                  </button>
                  <button
                    className="btn-hero px-4 py-2 rounded-md"
                    onClick={() => {
                      setPendingQuery("");
                      setQuery("");
                      setActiveCategory("All");
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            ) : (
            <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {visiblePosts.map((post) => {
                const Card = (
                  <article key={post.title} className="group bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full aspect-[16/9] object-cover group-hover:scale-[1.01] transition-transform"
                      loading="eager"
                      decoding="async"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="p-5">
                      <div className="mb-2 text-xs uppercase tracking-wide flex items-center gap-2">
                        <span className="bg-accent/90 text-accent-foreground px-2 py-0.5 rounded">{post.category}</span>
                        <span className="text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    </div>
                  </article>
                );
                return post.slug ? (
                  <a key={post.title} href={post.slug} className="block">{Card}</a>
                ) : (
                  Card
                );
              })}
            </div>
            )}

            {/* Load More */}
            {visibleCount < filteredPosts.length && (
              <div className="text-center">
                <button
                  onClick={handleLoadMore}
                  className="btn-hero px-6 py-3 rounded-lg"
                >
                  Load More
                </button>
              </div>
            )}

            {/* JSON-LD for Featured Article */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  "headline": featured.title,
                  "datePublished": featured.date,
                  "image": [featured.image],
                  "articleSection": featured.category,
                  "description": featured.excerpt,
                }),
              }}
            />

            {/* JSON-LD: Breadcrumbs for Blog */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Resources",
                      "item": "/resources"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Blog",
                      "item": "/resources/blog"
                    }
                  ]
                })
              }}
            />

            {/* JSON-LD: ItemList for visible articles */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "ItemList",
                  "itemListElement": allPosts.map((p, idx) => ({
                    "@type": "ListItem",
                    "position": idx + 1,
                    "url": p.slug ?? "/resources/blog",
                    "name": p.title,
                    "image": p.image
                  }))
                })
              }}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;
