import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import {
  servicePillars,
  flagshipServices,
  industries,
  placeholderWork,
} from "@/lib/site-data";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/about",
    "/about/process",
    "/industries",
    "/blog",
    "/faq",
    "/contact",
    "/start-a-project",
    "/privacy-policy",
    "/terms-of-service",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = servicePillars.map((pillar) => ({
    url: `${SITE_URL}/services/${pillar.slug}`,
    lastModified: new Date(),
  }));

  const flagshipRoutes = flagshipServices.map((flagship) => ({
    url: `${SITE_URL}/services/${flagship.slug}`,
    lastModified: new Date(),
  }));

  const industryRoutes = industries.map((industry) => ({
    url: `${SITE_URL}/industries/${industry.slug}`,
    lastModified: new Date(),
  }));

  const workRoutes = placeholderWork.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...flagshipRoutes,
    ...industryRoutes,
    ...workRoutes,
    ...blogRoutes,
  ];
}
