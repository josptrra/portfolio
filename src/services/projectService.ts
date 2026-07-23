import { supabase } from '../lib/supabase';
import { type Project, projects as fallbackProjects } from '../data/projects';

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
      problem: row.problem,
      contributions: row.contributions || [],
      links: row.links || [],
    },
  };
}

/**
 * Fetch all projects from Supabase database.
 * Falls back to local static array if database table is empty or error occurs.
 */
export async function getProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: true });

    if (error || !data || data.length === 0) {
      if (error) console.warn('[projectService] Supabase error, using fallback:', error.message);
      return fallbackProjects;
    }

    return (data as SupabaseProjectRow[]).map(mapRowToProject);
  } catch (err) {
    console.warn('[projectService] Fetch failed, using fallback:', err);
    return fallbackProjects;
  }
}

/**
 * Fetch a single project by slug from Supabase.
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error || !data) {
      // Fallback to local static search
      const fallback = fallbackProjects.find((p) => p.slug === slug);
      return fallback || null;
    }

    return mapRowToProject(data as SupabaseProjectRow);
  } catch {
    const fallback = fallbackProjects.find((p) => p.slug === slug);
    return fallback || null;
  }
}
