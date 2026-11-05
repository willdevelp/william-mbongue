import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = ["", "/a-propos", "/projets", "/certifications", "/contact", "/cv"].map(
    (route) => ({
      url: `${site.url}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }),
  );

  const projectRoutes = projects.map((project) => ({
    url: `${site.url}/projets/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes];
}
