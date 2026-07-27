import { supabase } from '../lib/supabase';
import { type Project } from '../data/projects';

export interface AdminMessageRow {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

/**
 * Fetch all contact messages from Supabase messages table for Admin CMS.
 */
export async function getContactMessages(): Promise<AdminMessageRow[]> {
  try {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return (data as AdminMessageRow[]) || [];
  } catch (err) {
    console.error('[adminService] Failed to fetch contact messages:', err);
    return [];
  }
}

/**
 * Delete a contact message by ID.
 */
export async function deleteContactMessage(id: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('messages')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (err) {
    console.error('[adminService] Failed to delete contact message:', err);
    return false;
  }
}

/**
 * Create a new project in Supabase.
 */
export async function createProject(projectData: Partial<Project>): Promise<boolean> {
  try {
    const { error } = await supabase.from('projects').insert([
      {
        slug: projectData.slug,
        folder_name: projectData.folderName || projectData.slug,
        title: projectData.title,
        description: projectData.description,
        tech: projectData.tech || [],
        badge: projectData.badge || '> Featured',
        role: projectData.role || 'Software Engineer',
        image: projectData.image || (projectData.images?.[0] || ''),
        images: projectData.images || [],
        problem: projectData.detail?.problem || '',
        contributions: projectData.detail?.contributions || [],
        links: projectData.detail?.links || [],
      },
    ]);

    if (error) throw error;
    return true;
  } catch (err) {
    console.error('[adminService] Failed to create project:', err);
    return false;
  }
}

/**
 * Update an existing project in Supabase.
 */
export async function updateProject(slug: string, projectData: Partial<Project>): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('projects')
      .update({
        folder_name: projectData.folderName || projectData.slug,
        title: projectData.title,
        description: projectData.description,
        tech: projectData.tech || [],
        badge: projectData.badge || '> Featured',
        role: projectData.role || 'Software Engineer',
        image: projectData.images && projectData.images.length > 0 ? projectData.images[0] : '',
        images: projectData.images || [],
        problem: projectData.detail?.problem || '',
        contributions: projectData.detail?.contributions || [],
        links: projectData.detail?.links || [],
      })
      .eq('slug', slug);

    if (error) throw error;
    return true;
  } catch (err) {
    console.error('[adminService] Failed to update project:', err);
    return false;
  }
}

/**
 * Delete a project by slug.
 */
export async function deleteProject(slug: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('slug', slug);

    if (error) throw error;
    return true;
  } catch (err) {
    console.error('[adminService] Failed to delete project:', err);
    return false;
  }
}

/**
 * Upload an image file directly to Supabase Storage bucket 'project-images'
 * Returns the public URL of the uploaded image.
 */
export async function uploadImageFileToSupabase(file: File, folderSlug: string): Promise<string | null> {
  try {
    const cleanFolder = (folderSlug || 'general').trim().toLowerCase().replace(/\s+/g, '-');
    const cleanFileName = file.name.replace(/\s+/g, '-').toLowerCase();
    const destinationPath = `${cleanFolder}/${cleanFileName}`;

    const { error } = await supabase.storage
      .from('project-images')
      .upload(destinationPath, file, {
        contentType: file.type,
        upsert: true,
      });

    if (error) {
      console.error('[adminService] Storage upload error:', error.message);
      throw error;
    }

    const { data: publicUrlData } = supabase.storage
      .from('project-images')
      .getPublicUrl(destinationPath);

    return publicUrlData.publicUrl;
  } catch (err) {
    console.error('[adminService] Failed to upload image:', err);
    return null;
  }
}

