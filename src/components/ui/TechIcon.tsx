import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiPython,
  SiTailwindcss,
  SiGit,
  SiGooglecloud,
  SiJira,
  SiFlutter,
  SiKotlin,
  SiDart,
  SiVite,
  SiGithubactions
} from 'react-icons/si';

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-5 h-5" }: TechIconProps) {
  const normalized = name.toLowerCase();

  // 1. React
  if (normalized.includes('react')) {
    return <SiReact className={`${className} text-[#61DAFB]`} />;
  }

  // 2. Next.js
  if (normalized.includes('next')) {
    return <SiNextdotjs className={`${className} text-text`} />;
  }

  // 3. TypeScript
  if (normalized.includes('typescript') || normalized === 'ts') {
    return <SiTypescript className={`${className} text-[#3178C6]`} />;
  }

  // 4. JavaScript
  if (normalized.includes('javascript') || (normalized.includes('js') && !normalized.includes('node') && !normalized.includes('express'))) {
    return <SiJavascript className={`${className} text-[#F7DF1E]`} />;
  }

  // 5. Node.js (Authentic Green Hexagon Logo)
  if (normalized.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#339933" />
        <path d="M12 4.2L4.5 8.5v7l7.5 4.3 7.5-4.3v-7L12 4.2zm4.5 10.3l-4.5 2.6-4.5-2.6V9.5l4.5-2.6 4.5 2.6v5z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 6. Express.js (Authentic Minimalist "ex" Badge Logo)
  if (normalized.includes('express')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#000000" stroke="#444444" strokeWidth="1" />
        <text x="12" y="16.5" fontStyle="italic" fontFamily="sans-serif" fontSize="13" fontWeight="900" fill="#FFFFFF" textAnchor="middle" letterSpacing="-1">ex</text>
      </svg>
    );
  }

  // 7. PostgreSQL
  if (normalized.includes('postgres') || normalized.includes('sql')) {
    return <SiPostgresql className={`${className} text-[#4169E1]`} />;
  }

  // 8. Firebase (Authentic Multi-Colored 3D Flame Logo)
  if (normalized.includes('firebase')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M3.8 17.6l2.3-14.3 4.1 7.7-6.4 6.6z" fill="#FFA000" />
        <path d="M14.1 9.2l1.9-3.6 4.2 12-6.1-8.4z" fill="#F57C00" />
        <path d="M11.9 12.6l-1.7-3.2L3.8 17.6l8.1-5z" fill="#FFCA28" />
        <path d="M3.8 17.6L12 22.2l8.2-4.6-6.1-8.4-2.2 4.4-8.1 4z" fill="#EEAB37" />
      </svg>
    );
  }

  // 9. Python
  if (normalized.includes('python')) {
    return <SiPython className={`${className} text-[#3776AB]`} />;
  }

  // 10. TailwindCSS
  if (normalized.includes('tailwind')) {
    return <SiTailwindcss className={`${className} text-[#06B6D4]`} />;
  }

  // 11. Git
  if (normalized.includes('git')) {
    return <SiGit className={`${className} text-[#F05032]`} />;
  }

  // 12. Google Cloud
  if (normalized.includes('gcp') || normalized.includes('cloud')) {
    return <SiGooglecloud className={`${className} text-[#4285F4]`} />;
  }

  // 13. Jira
  if (normalized.includes('jira') || normalized.includes('agile')) {
    return <SiJira className={`${className} text-[#2684FF]`} />;
  }

  // 14. Flutter
  if (normalized.includes('flutter')) {
    return <SiFlutter className={`${className} text-[#02569B]`} />;
  }

  // 15. Kotlin
  if (normalized.includes('kotlin')) {
    return <SiKotlin className={`${className} text-[#7F52FF]`} />;
  }

  // 16. Dart
  if (normalized.includes('dart')) {
    return <SiDart className={`${className} text-[#00B4AB]`} />;
  }

  // 17. Vite
  if (normalized.includes('vite')) {
    return <SiVite className={`${className} text-[#646CFF]`} />;
  }

  // 18. CI/CD / GitHub Actions / DevOps
  if (normalized.includes('ci') || normalized.includes('cd') || normalized.includes('devops')) {
    return <SiGithubactions className={`${className} text-[#2088FF]`} />;
  }

  // 19. REST API (Sleek API Code Route Symbol `</>`)
  if (normalized.includes('rest') || normalized.includes('api') || normalized.includes('jwt')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }

  // Default Code Fallback
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
