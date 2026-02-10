import { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Restoration Tips & Expert Advice Blog | FloridaRestorePros',
  description: 'Expert advice on property restoration, fire damage recovery, water damage prevention, mold remediation, and roofing maintenance for Florida homes.',
};

const CMS_API = process.env.CMS_API_URL || 'http://localhost:3012';

interface ArticleSummary {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  read_time: string;
  category: string;
  featured: number;
  featured_image: string;
}

async function getArticles(): Promise<ArticleSummary[]> {
  try {
    const res = await fetch(`${CMS_API}/api/articles`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getArticles();
  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <div>
      <Nav active="/blog" />

      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Restoration Tips & Expert Advice</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Expert advice on fire recovery, water damage prevention, mold remediation, roofing maintenance, and protecting your Florida property.
          </p>
        </div>
      </section>

      {featuredPost && (
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {featuredPost.featured_image ? (
                  <img src={`${CMS_API}${featuredPost.featured_image}`} alt={featuredPost.title} className="rounded-2xl h-64 lg:h-80 w-full object-cover" />
                ) : (
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                      <span className="text-sm font-medium opacity-75">Featured Article</span>
                    </div>
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{featuredPost.category}</span>
                    <span className="text-gray-500 text-sm">{featuredPost.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-4 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500 text-sm">{featuredPost.read_time}</span>
                    <span className="text-blue-600 font-medium group-hover:underline">Read Article &rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition h-full flex flex-col">
                  {post.featured_image ? (
                    <img src={`${CMS_API}${post.featured_image}`} alt={post.title} className="h-48 w-full object-cover" />
                  ) : (
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 h-48 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">{post.category}</span>
                      <span className="text-gray-400 text-xs">{post.read_time}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{post.date}</span>
                      <span className="text-blue-600 text-sm font-medium">Read &rarr;</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Informed About Property Care</h2>
          <p className="text-blue-100 mb-8">Get expert restoration tips and property maintenance advice delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none" />
            <button type="submit" className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
