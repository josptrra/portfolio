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

  // 17. Python
  if (normalized.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M11.8 2c-4.4 0-4.1 1.9-4.1 1.9v2h4.2v.6H6.1S3 6.1 3 10.6s2.7 4.3 2.7 4.3h1.6v-2.3s-.1-2.7 2.7-2.7h4.6s2.6.1 2.6-2.5V4.6S17.6 2 11.8 2zm-2.4 1.4a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" fill="#3776AB" />
        <path d="M12.2 22c4.4 0 4.1-1.9 4.1-1.9v-2h-4.2v-.6h5.8s3.1.4 3.1-4.1-2.7-4.3-2.7-4.3h-1.6v2.3s.1 2.7-2.7 2.7H9.4s-2.6-.1-2.6 2.5v2.8s-.4 2.6 5.4 2.6zm2.4-1.4a.9.9 0 1 1 0-1.8.9.9 0 0 1 0-1.8z" fill="#FFD43B" />
      </svg>
    );
  }

  // 18. Flutter / Mobile
  if (normalized.includes('flutter')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M14.3 2L5 11.3l2.9 2.9L17.2 5h-2.9zm-.1 9.4l-4.4 4.4 4.4 4.4h2.9l-4.4-4.4 4.4-4.4h-2.9z" fill="#02569B" />
        <path d="M17.1 11.4L12.7 15.8l4.4 4.4h2.9l-4.4-4.4 4.4-4.4h-2.9z" fill="#0175C2" />
        <path d="M14.3 20.2l2.9-2.9 2.9 2.9h-5.8z" fill="#02569B" />
      </svg>
    );
  }

  // 19. Kotlin
  if (normalized.includes('kotlin')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M24 24H0V0h24L12 12z" fill="url(#kotlin-grad)" />
        <defs>
          <linearGradient id="kotlin-grad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E44857" />
            <stop offset="0.5" stopColor="#C711E1" />
            <stop offset="1" stopColor="#7F52FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 20. Dart
  if (normalized.includes('dart')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4.5 12.5L2 15l7 7 2.5-2.5L4.5 12.5z" fill="#00B4AB" />
        <path d="M11.5 19.5L19 12l3 3-7 7-3.5-2.5z" fill="#0081C6" />
        <path d="M12 2L2 12l2.5 2.5L14.5 4.5 12 2z" fill="#00B4AB" />
        <path d="M14.5 4.5L22 12l-3 3-9.5-9.5L14.5 4.5z" fill="#00B4AB" />
      </svg>
    );
  }

  // 21. Firebase
  if (normalized.includes('firebase')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M3.8 17.6l2.3-14.3 4.1 7.7-6.4 6.6z" fill="#FFA000" />
        <path d="M14.1 9.2l1.9-3.6 4.2 12-6.1-8.4z" fill="#F57C00" />
        <path d="M11.9 12.6l-1.7-3.2L3.8 17.6l8.1-5s0 0 0 0z" fill="#FFCA28" />
        <path d="M3.8 17.6L12 22.2l8.2-4.6-6.1-8.4-2.2 4.4-8.1 4z" fill="#EEAB37" />
      </svg>
    );
  }

  // 22. CI/CD / DevOps
  if (normalized.includes('ci') || normalized.includes('cd') || normalized.includes('devops')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M18 6a3 3 0 0 0-3 3v6a3 3 0 0 1-3 3" />
        <path d="M6 9v6a3 3 0 0 0 3 3" />
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
