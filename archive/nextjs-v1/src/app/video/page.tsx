import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video | Nycole Ray",
  description:
    "Video documentation of choreographic works by Nycole Ray.",
};

interface Video {
  title: string;
  embedUrl?: string;
}

const videos: Video[] = [
  { title: "Diaspora" },
  { title: "Nineteenth" },
  { title: "Rising" },
  { title: "Love Songs" },
  { title: "Opaque" },
  { title: "The Breath Within" },
  { title: "Above & Below" },
];

export default function VideoPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <header className="mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-4 text-purple">Video</h1>
        <p className="text-lg text-purple-light">
          Performance documentation
        </p>
      </header>

      <div className="grid gap-12 md:gap-16">
        {videos.map((video, index) => (
          <article key={index}>
            <h2 className="font-serif text-xl md:text-2xl mb-4 text-purple">
              {video.title}
            </h2>
            {video.embedUrl ? (
              <div className="relative aspect-video bg-cream-dark rounded-lg overflow-hidden">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative aspect-video bg-cream-dark border border-mauve-light rounded-lg flex items-center justify-center">
                <p className="text-mauve-dark text-sm">
                  Video coming soon
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
