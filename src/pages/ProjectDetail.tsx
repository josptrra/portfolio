import { useParams, Link } from 'react-router-dom';

export default function ProjectDetail() {
  const { slug } = useParams();

  return (
    <div className="p-8">
      <Link to="/" className="text-muted hover:text-accent mb-8 inline-block">← Back to Home</Link>
      <h1 className="text-2xl text-glow text-accent mb-4">Project: {slug}</h1>
      <p className="text-muted">This is a placeholder for the project detail page.</p>
    </div>
  );
}
