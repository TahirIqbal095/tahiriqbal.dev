import { Metadata } from "next";
import { portfolioConfig } from "@/config/portfolio";
export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
}

// Base site configuration
export const siteConfig = {
  name: portfolioConfig.name,
  title: `${portfolioConfig.name} - ${portfolioConfig.title}`,
  description: portfolioConfig.description,
  url: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
  author: {
    name: portfolioConfig.name,
    twitter: "https://x.com/TahirIqbal095",
    github: "https://github.com/TahirIqbal095",
    linkedin: "https://www.linkedin.com/in/tahiriqbal095/",
    email: "shahtahir786@gmail.com",
  },
  keywords: portfolioConfig.keywords,
  ogImage: "/meta/home.png",
};

export const pageMetadata: Record<string, PageMeta> = {
  // Home page
  "/": {
    title: `${portfolioConfig.name} - ${portfolioConfig.title}`,
    description: `${portfolioConfig.description}`,
    keywords: portfolioConfig.keywords,
    ogImage: "/meta/home.png",
    twitterCard: "summary_large_image",
  },

  // Blog page
  "/blogs": {
    title: "Blog - Thoughts & Tutorials",
    description:
      "Read my thoughts, tutorials, and insights on engineering, programming, and web development.",
    keywords: [
      "blog",
      "tutorials",
      "programming",
      "web development",
      "technical writing",
    ],
    ogImage: "/meta/blogs.png",
    twitterCard: "summary_large_image",
  },

  "/guestbook": {
    title: "Guestbook - Sign the Guestbook",
    description:
      "Leave a message in my guestbook and share your thoughts or feedback with me.",
    keywords: [
      "guestbook",
      "messages",
      "feedback",
      "comments",
      "visitor messages",
      "programming",
      "web development",
    ],
    ogImage: "/meta/guestbook.png",
    twitterCard: "summary_large_image",
  },
};

// Helper function to get metadata for a specific page
export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata["/"];
}

// Helper function to generate complete metadata object for Next.js
export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(", "),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: "website",
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || "summary_large_image",
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  } as Metadata;
}
