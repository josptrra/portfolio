interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-3.5 h-3.5" }: TechIconProps) {
  const normalized = name.toLowerCase();

  // 1. React Query
  if (normalized.includes('react query')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FF4154" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    );
  }

  // 2. React
  if (normalized.includes('react')) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="#61DAFB">
        <circle cx="0" cy="0" r="2" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // 3. Next.js (Centered N in dark circle badge)
  if (normalized.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#000000" stroke="#FFFFFF" strokeWidth="1.2" />
        <path d="M7.5 16.5V7.5H9.5L14.5 14.5V7.5H16.5V16.5H14.5L9.5 9.5V16.5H7.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 4. Node.js (Green Node square with white hexagon)
  if (normalized.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#339933" />
        <path d="M12 4.5L4.5 8.8v8.4l7.5 4.3 7.5-4.3V8.8L12 4.5zm4.8 11.2l-4.8 2.8-4.8-2.8v-5.5l4.8-2.8 4.8 2.8v5.5z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 5. Express.js (Dark square with white "ex" logo)
  if (normalized.includes('express')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#000000" stroke="#444444" strokeWidth="1" />
        <text x="12" y="16.5" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">ex</text>
      </svg>
    );
  }

  // 6. TypeScript (Blue square with clear TS text)
  if (normalized.includes('typescript') || normalized === 'ts') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <path d="M11.3 10.3H8.3v8.7H5.6v-8.7H2.6V8.1h8.7v2.2zm1.6 6.3c.6.5 1.4.8 2.3.8 1.1 0 1.7-.5 1.7-1.2 0-.7-.5-1.1-1.8-1.5l-.8-.3c-1.9-.6-2.8-1.5-2.8-3.1 0-2 1.6-3.4 4.3-3.4 1.2 0 2.2.3 3 .8l-1 2.1c-.6-.4-1.3-.6-2-.6-1 0-1.6.5-1.6 1.1 0 .7.5 1 1.7 1.4l.8.3c2.1.7 3 1.6 3 3.2 0 2.2-1.7 3.5-4.6 3.5-1.5 0-2.7-.4-3.6-1l1.4-2.1z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 7. JavaScript (Yellow square with clear JS text)
  if (normalized.includes('javascript') || normalized.includes('js')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path d="M12 18.5c.7.4 1.5.6 2.3.6 1.1 0 1.7-.5 1.7-1.2 0-.7-.5-1.1-1.8-1.5l-.8-.3c-1.9-.6-2.8-1.5-2.8-3.1 0-2 1.6-3.4 4.3-3.4 1.2 0 2.2.3 3 .8l-1 2.1c-.6-.4-1.3-.6-2-.6-1 0-1.6.5-1.6 1.1 0 .7.5 1 1.7 1.4l.8.3c2.1.7 3 1.6 3 3.2 0 2.2-1.7 3.5-4.6 3.5-1.5 0-2.7-.4-3.6-1l1.4-2.1zM8.3 14.5v2.8c0 1.2-.7 1.8-1.8 1.8-.7 0-1.3-.2-1.8-.6l.9-2c.3.2.6.4.9.4.3 0 .5-.2.5-.6v-6.3h2.6v4.5z" fill="#000000" />
      </svg>
    );
  }

  // 8. Figma (UI/UX / Component Design)
  if (normalized.includes('ui') || normalized.includes('ux') || normalized.includes('design') || normalized.includes('figma')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z" fill="#0ACF83" />
        <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="#A259FF" />
        <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="#F24E1E" />
        <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" fill="#FF7262" />
        <path d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12Z" fill="#1ABCFE" />
      </svg>
    );
  }

  // 9. TailwindCSS
  if (normalized.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#06B6D4">
        <path d="M12 6c-3.3 0-5.5 1.7-6.6 4.9 1.1-1.6 2.5-2.2 4.1-1.7 1 0.3 1.8 1.1 2.6 2 1.3 1.4 2.8 3 6.5 3 3.3 0 5.5-1.7 6.6-4.9-1.1 1.6-2.5 2.2-4.1 1.7-1-0.3-1.8-1.1-2.6-2-1.3-1.4-2.8-3-6.5-3zm-6.6 6c-3.3 0-5.5 1.7-6.6 4.9 1.1-1.6 2.5-2.2 4.1-1.7 1 0.3 1.8 1.1 2.6 2 1.3 1.4 2.8 3 6.5 3 3.3 0 5.5-1.7 6.6-4.9-1.1 1.6-2.5 2.2-4.1 1.7-1-0.3-1.8-1.1-2.6-2-1.3-1.4-2.8-3-6.5-3z" />
      </svg>
    );
  }

  // 10. GCP / Cloud
  if (normalized.includes('gcp') || normalized.includes('cloud')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    );
  }

  // 11. PostgreSQL
  if (normalized.includes('postgres') || normalized.includes('sql') || normalized.includes('database')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#4169E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }

  // 12. Strapi CMS
  if (normalized.includes('strapi') || normalized.includes('cms')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#8E75FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    );
  }

  // 13. Jira
  if (normalized.includes('jira') || normalized.includes('scrum') || normalized.includes('agile')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#2684FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    );
  }

  // 14. Git
  if (normalized.includes('git')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F05032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    );
  }

  // 15. REST API / JWT
  if (normalized.includes('jwt') || normalized.includes('api') || normalized.includes('rest')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
      </svg>
    );
  }

  // 16. State Management
  if (normalized.includes('state') || normalized.includes('redux')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#764ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
      </svg>
    );
  }

  // Default fallback code icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
