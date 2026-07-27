import { supabase } from '../lib/supabase';
import { type Project } from '../data/projects';

export interface SupabaseProjectRow {
  id: string;
  slug: string;
  folder_name: string;
  title: string;
  description: string;
  tech: string[];
  badge: string;
  role?: string;
  image?: string;
  images?: string[];
  problem: string;
  contributions: string[];
  links: { label: string; url: string }[];
}

/**
 * Helper to map Supabase table row to Project interface.
 */
function mapRowToProject(row: SupabaseProjectRow): Project {
  const imagesList = row.images && row.images.length > 0
    ? row.images
    : (row.image ? [row.image] : []);

  return {
    slug: row.slug,
    folderName: row.folder_name,
    title: row.title,
    description: row.description,
    tech: row.tech || [],
    badge: row.badge,
    role: row.role,
    image: row.image || imagesList[0],
    images: imagesList,
    detail: {
      problem: row.problem || '',
      contributions: row.contributions || [],
      links: row.links || [],
    },
  };
}

/**
 * Fetch all projects 100% dynamically from Supabase database only.
 */
export async function getProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: true });

    if (error || !data) {
      if (error) console.error('[projectService] Supabase error:', error.message);
      return [];
    }

    return (data as SupabaseProjectRow[]).map(mapRowToProject);
  } catch (err) {
    console.error('[projectService] Fetch failed:', err);
    return [];
  }
}

/**
 * Fetch a single project by slug 100% dynamically from Supabase database only.
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error || !data) {
      if (error) console.error('[projectService] Error fetching project by slug:', error.message);
      return null;
    }

    return mapRowToProject(data as SupabaseProjectRow);
  } catch (err) {
    console.error('[projectService] Exception fetching project by slug:', err);
    return null;
  }
}
