import { getSupabaseClient } from "./supabase";
import { staticNews, NewsItem } from "@/content/news";
import type { Locale } from "@/content/site";

export async function getNews(locale: Locale): Promise<NewsItem[]> {
  const supabase = getSupabaseClient();
  if (!supabase) return staticNews[locale];

  const { data, error } = await supabase
    .from("news_posts")
    .select("title, location, excerpt")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (error || !data || data.length === 0) return staticNews[locale];

  return data as NewsItem[];
}
