import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery | Nycole Ray",
  description:
    "Performance photography, rehearsal images, and portraits of choreographer Nycole Ray.",
};

// Placeholder for gallery images - will be populated with actual photos
interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const galleryImages: GalleryImage[] = [];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <header className="mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-4 text-purple">Gallery</h1>
        <p className="text-lg text-purple-light">
          Performance &amp; rehearsal photography
        </p>
      </header>

      {galleryImages.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/5] bg-cream-dark border border-mauve-light rounded-lg overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
                loading={index < 6 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="relative aspect-[4/5] bg-cream-dark border border-mauve-light rounded-lg flex items-center justify-center"
            >
              <p className="text-mauve-dark text-sm text-center px-4">
                Photo coming soon
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
