export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-muted font-sans text-[13px] mt-16">
      <div className="max-w-4xl mx-auto px-8">
        © {new Date().getFullYear()} julio.sh — Built with React + Vite. No templates were harmed.
      </div>
    </footer>
  );
}
