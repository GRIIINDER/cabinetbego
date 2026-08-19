import { getSupabaseClient } from "./supabase";

export type JobPosting = {
  id: string;
  title: string;
  location: string | null;
  contract_type: string | null;
  description: string;
  deadline: string | null;
};

export async function getOpenJobPostings(): Promise<JobPosting[]> {
  const supabase = getSupabaseClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("job_postings")
    .select("id, title, location, contract_type, description, deadline")
    .eq("is_open", true)
    .order("created_at", { ascending: false });

  if (error || !data) return [];
  return data as JobPosting[];
}
