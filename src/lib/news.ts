import { getSupabaseClient } from "./supabase";
import { staticNews, NewsItem } from "@/content/news";

export async function getNews(): Promise<NewsItem[]> {
  const supabase = getSupabaseClient();
  if (!supabase) return staticNews;

  const { data, error } = await supabase
    .from("news_posts")
    .select("title, location, excerpt")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (error || !data || data.length === 0) return staticNews;

  return data as NewsItem[];
}
