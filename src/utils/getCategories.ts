import type { CollectionEntry } from "astro:content";
import { POST_CATEGORIES } from "@/content.config";
import { postFilter } from "./postFilter";

type Category = {
  category: string;
  postCount: number;
};

/**
 * Builds the category list for the fixed, pre-defined blog categories.
 *
 * - Always returns every category in `POST_CATEGORIES` order (so empty ones
 *   still show up), with a per-category post count.
 * - Drafts and scheduled posts are excluded via `postFilter()`.
 */
export function getCategories(
  posts: CollectionEntry<"posts">[]
): Category[] {
  const counts = posts
    .filter(postFilter)
    .reduce<Record<string, number>>((acc, { data }) => {
      acc[data.category] = (acc[data.category] ?? 0) + 1;
      return acc;
    }, {});

  return POST_CATEGORIES.map(category => ({
    category,
    postCount: counts[category] ?? 0,
  }));
}