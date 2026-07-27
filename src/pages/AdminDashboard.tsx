import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { supabase } from '../lib/supabase';
import { getProjects } from '../services/projectService';
import {
  getContactMessages,
  deleteContactMessage,
  createProject,
  updateProject,
  deleteProject,
  uploadImageFileToSupabase,
  type AdminMessageRow,
} from '../services/adminService';
import { type Project } from '../data/projects';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'projects' | 'messages'>('projects');
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [messageList, setMessageList] = useState<AdminMessageRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string>('');

  // File Upload State
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');

  // Delete Confirmation Modal State
  const [deleteModalTarget, setDeleteModalTarget] = useState<{
    type: 'project' | 'message';
    id: string;
    name: string;
  } | null>(null);

  // Form State for Add/Edit Project
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    slug: '',
    folderName: '',
    title: '',
    description: '',
    tech: '',
    badge: '> Featured',
    role: '',
    image: '',
    images: '',
    problem: '',
    contributions: '',
    links: '',
  });

  // Verify Supabase auth session
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        toast.error('Session expired. Please log in with Supabase Auth.');
        navigate('/sys-admin-root-8823');
      } else {
        setUserEmail(session.user?.email || 'Admin');
      }
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/sys-admin-root-8823');
      } else {
        setUserEmail(session.user?.email || 'Admin');
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  // Load data
  const loadData = async () => {
    setLoading(true);
    const projectsData = await getProjects();
    const messagesData = await getContactMessages();
    setProjectList(projectsData);
    setMessageList(messagesData);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success('Signed out from Supabase Auth.');
    navigate('/sys-admin-root-8823');
  };

  const handleOpenAddForm = () => {
    setEditingSlug(null);
    setUploadStatus('');
    setFormData({
      slug: '',
      folderName: '',
      title: '',
      description: '',
      tech: 'React, TypeScript, Tailwind CSS',
      badge: '> Featured',
      role: 'Fullstack Developer',
      image: '',
      images: '',
      problem: '',
      contributions: '',
      links: '',
    });
    setIsFormOpen(true);
  };

  const handleOpenEditForm = (proj: Project) => {
    setEditingSlug(proj.slug);
    setUploadStatus('');
    setFormData({
      slug: proj.slug,
      folderName: proj.folderName,
      title: proj.title,
      description: proj.description,
      tech: proj.tech.join(', '),
      badge: proj.badge,
      role: proj.role || '',
      image: proj.image || '',
      images: proj.images?.join('\n') || '',
      problem: proj.detail.problem || '',
      contributions: proj.detail.contributions?.join('\n') || '',
      links: proj.detail.links?.map((l) => `${l.label}|${l.url}`).join('\n') || '',
    });
    setIsFormOpen(true);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setUploadStatus(`Uploading ${files.length} file(s)...`);

    const folderSlug = formData.slug || 'general';
    const newUploadedUrls: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      setUploadStatus(`Uploading ${i + 1}/${files.length}: ${file.name}...`);
      const publicUrl = await uploadImageFileToSupabase(file, folderSlug);
      if (publicUrl) {
        newUploadedUrls.push(publicUrl);
      }
    }

    if (newUploadedUrls.length > 0) {
      const existingImages = formData.images
        ? formData.images.split('\n').map((s) => s.trim()).filter(Boolean)
        : [];
      const combinedImages = [...existingImages, ...newUploadedUrls];

      setFormData((prev) => ({
        ...prev,
        image: prev.image || combinedImages[0],
        images: combinedImages.join('\n'),
      }));

      toast.success(`${newUploadedUrls.length} file(s) uploaded to Supabase Storage!`);
      setUploadStatus(`✅ ${newUploadedUrls.length} file(s) uploaded successfully!`);
    } else {
      toast.error('Upload failed. Check Supabase Storage RLS policy.');
      setUploadStatus('❌ Upload failed.');
    }

    setUploading(false);
  };

  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const techArray = formData.tech.split(',').map((t) => t.trim()).filter(Boolean);
    const imagesArray = formData.images.split('\n').map((i) => i.trim()).filter(Boolean);
    const contribsArray = formData.contributions.split('\n').map((c) => c.trim()).filter(Boolean);
    const linksArray = formData.links
      .split('\n')
      .map((l) => {
        const [label, url] = l.split('|');
        return label && url ? { label: label.trim(), url: url.trim() } : null;
      })
      .filter(Boolean) as { label: string; url: string }[];

    const payload: Partial<Project> = {
      slug: formData.slug.trim(),
      folderName: formData.folderName.trim() || formData.slug.trim(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      tech: techArray,
      badge: formData.badge.trim(),
      role: formData.role.trim(),
      image: imagesArray[0] || '',
      images: imagesArray,
      detail: {
        problem: formData.problem.trim(),
        contributions: contribsArray,
        links: linksArray,
      },
    };

    let success = false;
    if (editingSlug) {
      success = await updateProject(editingSlug, payload);
    } else {
      success = await createProject(payload);
    }

    if (success) {
      toast.success(editingSlug ? 'Project updated in Supabase!' : 'New project created in Supabase!');
      setIsFormOpen(false);
      await loadData();
    } else {
      toast.error('Failed to save project. Ensure RLS policies are enabled.');
      setLoading(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (!deleteModalTarget) return;

    setLoading(true);
    if (deleteModalTarget.type === 'project') {
      const ok = await deleteProject(deleteModalTarget.id);
      if (ok) {
        toast.success(`Deleted project "${deleteModalTarget.name}"!`);
      } else {
        toast.error(`Could not delete project "${deleteModalTarget.name}". Check RLS policy.`);
      }
    } else if (deleteModalTarget.type === 'message') {
      const ok = await deleteContactMessage(deleteModalTarget.id);
      if (ok) {
        toast.success('Message deleted!');
      } else {
        toast.error('Could not delete message.');
      }
    }

    setDeleteModalTarget(null);
    await loadData();
  };

  return (
    <div className="min-h-screen bg-background text-text font-mono flex flex-col justify-between">
      {/* Header Bar */}
      <header className="border-b border-border/80 bg-surface/80 px-6 py-4 flex items-center justify-between sticky top-0 z-40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-accent animate-pulse shadow-glow-sm" />
          <span className="font-display font-bold text-accent text-lg">
            PORTFOLIO CMS <span className="text-xs text-muted font-mono">// AUTH: {userEmail}</span>
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <button
            type="button"
            onClick={handleLogout}
            className="text-red-400 hover:text-red-300 border border-red-500/30 hover:border-red-500/60 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            [ SIGN OUT ✕ ]
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto w-full px-6 py-8 space-y-8 grow">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-3 border-b border-border/60 pb-3 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded-xl transition-all font-bold cursor-pointer ${
              activeTab === 'projects'
                ? 'bg-accent/10 border border-accent text-accent shadow-glow-sm'
                : 'bg-surface/80 border border-border/60 text-muted hover:text-text'
            }`}
          >
            [ PROJECTS CMS ({projectList.length}) ]
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-2 rounded-xl transition-all font-bold cursor-pointer ${
              activeTab === 'messages'
                ? 'bg-accent/10 border border-accent text-accent shadow-glow-sm'
                : 'bg-surface/80 border border-border/60 text-muted hover:text-text'
            }`}
          >
            [ INBOX MESSAGES ({messageList.length}) ]
          </button>
        </div>

        {/* TAB 1: PROJECTS CMS */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider">
                // MANAGE_PROJECTS_DATABASE
              </h2>
              <button
                type="button"
                onClick={handleOpenAddForm}
                className="bg-accent/10 hover:bg-accent/20 border border-accent text-accent font-bold px-4 py-2 rounded-xl text-xs transition-all cursor-pointer shadow-glow-sm flex items-center gap-2"
              >
                <span>+ ADD NEW PROJECT</span>
              </button>
            </div>

            {loading ? (
              <div className="text-xs text-muted animate-pulse py-8 text-center">
                $ fetching_projects_from_supabase...
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectList.map((proj) => (
                  <div
                    key={proj.slug}
                    className="bg-surface/90 border border-border/80 rounded-2xl p-5 space-y-4 shadow-lg relative"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-accent text-xs font-bold font-mono">{proj.badge}</span>
                        <h3 className="font-display text-lg font-bold text-text">{proj.title}</h3>
                        <p className="text-xs text-muted font-sans">{proj.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleOpenEditForm(proj)}
                          className="text-accent text-xs border border-accent/40 px-2.5 py-1 rounded-lg hover:bg-accent/10 cursor-pointer"
                        >
                          EDIT
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteModalTarget({ type: 'project', id: proj.slug, name: proj.title })}
                          className="text-red-400 text-xs border border-red-500/40 px-2.5 py-1 rounded-lg hover:bg-red-500/10 cursor-pointer"
                        >
                          DELETE
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 text-[11px] text-muted">
                      {proj.tech.map((t, idx) => (
                        <span key={idx} className="bg-background border border-border/60 px-2 py-0.5 rounded">
                          &gt; {t}
                        </span>
                      ))}
                    </div>

                    <div className="text-[11px] text-muted/80 pt-2 border-t border-border/40 flex justify-between">
                      <span>slug: {proj.slug}</span>
                      <span>images: {proj.images?.length || 1} file(s)</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: INBOX MESSAGES */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider">
              // CONTACT_FORM_SUBMISSIONS
            </h2>

            {loading ? (
              <div className="text-xs text-muted animate-pulse py-8 text-center">
                $ fetching_messages_from_supabase...
              </div>
            ) : messageList.length === 0 ? (
              <div className="bg-surface/80 border border-border/80 rounded-2xl p-8 text-center text-xs text-muted">
                No contact messages in database yet.
              </div>
            ) : (
              <div className="space-y-4">
                {messageList.map((msg) => (
                  <div
                    key={msg.id}
                    className="bg-surface/90 border border-border/80 rounded-2xl p-5 space-y-3 shadow-lg"
                  >
                    <div className="flex items-center justify-between border-b border-border/60 pb-3">
                      <div>
                        <span className="font-bold text-accent text-sm">{msg.name}</span>
                        <span className="text-muted text-xs ml-2">&lt;{msg.email}&gt;</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] text-muted font-mono">
                          {new Date(msg.created_at).toLocaleString()}
                        </span>
                        <button
                          type="button"
                          onClick={() => setDeleteModalTarget({ type: 'message', id: msg.id, name: msg.name })}
                          className="text-red-400 text-xs border border-red-500/40 px-2 py-1 rounded-lg hover:bg-red-500/10 cursor-pointer"
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-text font-sans leading-relaxed whitespace-pre-line">
                      {msg.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </main>

      {/* MODAL FORM FOR ADD / EDIT PROJECT */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-surface/95 border border-border/90 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <h3 className="text-accent font-bold text-base">
                {editingSlug ? `EDIT PROJECT: ${editingSlug}` : 'ADD NEW PROJECT TO SUPABASE'}
              </h3>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="text-muted hover:text-text cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-muted block mb-1">Slug (unique URL id):</label>
                  <input
                    type="text"
                    required
                    disabled={!!editingSlug}
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full bg-background border border-border/80 text-text p-2.5 rounded-xl font-mono outline-none focus:border-accent"
                    placeholder="my-project"
                  />
                </div>
                <div>
                  <label className="text-muted block mb-1">Badge label:</label>
                  <input
                    type="text"
                    required
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    className="w-full bg-background border border-border/80 text-text p-2.5 rounded-xl font-mono outline-none focus:border-accent"
                    placeholder="> In Production"
                  />
                </div>
              </div>

              <div>
                <label className="text-muted block mb-1">Title:</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-background border border-border/80 text-text p-2.5 rounded-xl font-mono outline-none focus:border-accent"
                  placeholder="My Awesome Project"
                />
              </div>

              <div>
                <label className="text-muted block mb-1">Description (short):</label>
                <input
                  type="text"
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-background border border-border/80 text-text p-2.5 rounded-xl font-mono outline-none focus:border-accent"
                  placeholder="High performance application..."
                />
              </div>

              <div>
                <label className="text-muted block mb-1">Tech Tags (comma separated):</label>
                <input
                  type="text"
                  value={formData.tech}
                  onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
                  className="w-full bg-background border border-border/80 text-text p-2.5 rounded-xl font-mono outline-none focus:border-accent"
                  placeholder="React, Next.js, Node.js, Postgres"
                />
              </div>

              {/* DIRECT FILE UPLOAD BUTTON */}
              <div className="bg-background/60 border border-border/80 p-3.5 rounded-xl space-y-2">
                <label className="text-accent font-bold block text-xs">
                  📁 DIRECT UPLOAD IMAGES TO SUPABASE STORAGE:
                </label>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <label className="bg-accent/10 hover:bg-accent/20 border border-accent text-accent font-bold px-4 py-2 rounded-xl text-xs transition-all cursor-pointer shadow-glow-sm inline-flex items-center gap-2 self-start">
                    <span>{uploading ? '⏳ UPLOADING...' : '📤 CHOOSE IMAGE FILES TO UPLOAD...'}</span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      disabled={uploading}
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                  {uploadStatus && (
                    <span className="text-[11px] text-muted font-mono">{uploadStatus}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="text-muted block mb-1">Multiple Image URLs (one URL per line):</label>
                <textarea
                  rows={4}
                  value={formData.images}
                  onChange={(e) => setFormData({ ...formData, images: e.target.value })}
                  className="w-full bg-background border border-border/80 text-text p-2.5 rounded-xl font-mono outline-none focus:border-accent"
                  placeholder="https://.../img1.png&#10;https://.../img2.png"
                />
              </div>

              <div>
                <label className="text-muted block mb-1">Overview / Problem Statement:</label>
                <textarea
                  rows={4}
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  className="w-full bg-background border border-border/80 text-text p-2.5 rounded-xl font-mono outline-none focus:border-accent"
                  placeholder="Detailed overview of the project..."
                />
              </div>

              <div>
                <label className="text-muted block mb-1">Contributions (one item per line):</label>
                <textarea
                  rows={3}
                  value={formData.contributions}
                  onChange={(e) => setFormData({ ...formData, contributions: e.target.value })}
                  className="w-full bg-background border border-border/80 text-text p-2.5 rounded-xl font-mono outline-none focus:border-accent"
                  placeholder="Built frontend UI&#10;Integrated REST API"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-border/60">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2 rounded-xl border border-border text-muted hover:text-text cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="px-6 py-2 rounded-xl bg-accent/20 border border-accent text-accent font-bold cursor-pointer hover:bg-accent/30 shadow-glow-sm disabled:opacity-50"
                >
                  Save to Supabase
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CUSTOM CYBERPUNK CONFIRM DELETE MODAL */}
      {deleteModalTarget && (
        <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-surface/95 border border-red-500/50 rounded-2xl max-w-md w-full p-6 space-y-5 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-3 text-red-400">
              <span className="text-xl">⚠️</span>
              <h3 className="font-bold text-sm uppercase tracking-wider">
                CONFIRM DELETION
              </h3>
            </div>

            <p className="text-xs text-text/90 font-sans leading-relaxed">
              Are you sure you want to permanently delete{' '}
              <strong className="text-accent font-mono">"{deleteModalTarget.name}"</strong> from Supabase? This action cannot be undone.
            </p>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-border/60 text-xs">
              <button
                type="button"
                onClick={() => setDeleteModalTarget(null)}
                className="px-4 py-2 rounded-xl border border-border text-muted hover:text-text cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="px-5 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 border border-red-500 text-red-400 font-bold cursor-pointer transition-all"
              >
                [ CONFIRM DELETE ]
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
