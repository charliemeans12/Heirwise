import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://heirwise.com"

  // Main pages
  const routes = ["", "/about-us", "/attorneys", "/practice-areas", "/blog", "/faq", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Attorney profiles
  const attorneys = ["george-brennen", "hellen-white", "michael-jones"]
  const attorneyRoutes = attorneys.map((id) => ({
    url: `${baseUrl}/attorneys/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Blog posts
  const blogPosts = ["understanding-personal-injury-claims", "estate-planning-guide", "business-formation-tips"]
  const blogRoutes = blogPosts.map((id) => ({
    url: `${baseUrl}/blog/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...routes, ...attorneyRoutes, ...blogRoutes]
}
