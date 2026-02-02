import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-mauve-light bg-cream-dark">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <Link
              href="/"
              className="font-serif text-xl tracking-tight text-purple hover:text-purple-light transition-colors"
            >
              Nycole Ray
            </Link>
            <p className="mt-2 text-sm text-mauve-dark">
              Choreographer &middot; Dancer &middot; Educator
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <Link
              href="/contact"
              className="text-sm text-purple-light hover:text-gold transition-colors"
            >
              Contact for inquiries
            </Link>
            <p className="text-sm text-mauve-dark">
              &copy; {currentYear} Nycole Ray. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
