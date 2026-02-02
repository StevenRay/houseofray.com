import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Nycole Ray",
  description:
    "Choreographic repertory by Nycole Ray, including commissions for Texas Ballet Theater, Dallas Black Dance Theatre, The Dallas Opera, and more.",
};

interface Work {
  title: string;
  music?: string;
  costumes?: string;
  lighting?: string;
  commission?: string;
  premiere?: string;
  note?: string;
}

const repertory: Work[] = [
  {
    title: "International Woman",
    music: "Henryk Górecki",
    commission: "Texas Ballet Theater",
    premiere: "Bass Performance Hall; Fort Worth, TX; 2025",
  },
  {
    title: "Diaspora",
    commission: "Dallas Black Dance Theatre",
    premiere:
      "New Texas Symphony Orchestra at Moody Performance Hall; Dallas, TX; 2022",
  },
  {
    title: "Rising",
  },
  {
    title: "Nineteenth",
    note: "Created for the centennial of the 19th Amendment",
    premiere: "Virtual premiere; 2021",
  },
  {
    title: "Love Songs",
  },
  {
    title: "The Breath Within",
  },
  {
    title: "Opaque",
  },
  {
    title: "Above & Below",
    note: "Created in tribute to Bruce Wood",
  },
  {
    title: "Reminisce",
    music: "John Legend and various artists",
    commission: "Dallas Black Dance Theatre",
    premiere: "Eisemann Center; Richardson, TX; 2020",
  },
  {
    title: "Samson and Delilah",
    note: "Opera choreography",
    commission: "The Dallas Opera",
  },
  {
    title: "Frida, Frida and Frida",
    commission: "Dallas Museum of Art",
  },
];

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <header className="mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-4 text-purple">Repertory</h1>
        <p className="text-lg text-purple-light">
          Selected choreographic works
        </p>
      </header>

      <div className="space-y-12">
        {repertory.map((work, index) => (
          <article
            key={index}
            className="border-b border-mauve-light pb-12 last:border-0"
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-4 text-purple">
              {work.title}
            </h2>
            <dl className="space-y-2 text-purple-dark">
              {work.music && (
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="text-mauve-dark text-sm uppercase tracking-wide">
                    Music
                  </dt>
                  <dd>{work.music}</dd>
                </div>
              )}
              {work.costumes && (
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="text-mauve-dark text-sm uppercase tracking-wide">
                    Costumes
                  </dt>
                  <dd>{work.costumes}</dd>
                </div>
              )}
              {work.lighting && (
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="text-mauve-dark text-sm uppercase tracking-wide">
                    Lighting
                  </dt>
                  <dd>{work.lighting}</dd>
                </div>
              )}
              {work.commission && (
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="text-mauve-dark text-sm uppercase tracking-wide">
                    Commission
                  </dt>
                  <dd>{work.commission}</dd>
                </div>
              )}
              {work.premiere && (
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <dt className="text-mauve-dark text-sm uppercase tracking-wide">
                    Premiere
                  </dt>
                  <dd>{work.premiere}</dd>
                </div>
              )}
              {work.note && (
                <p className="text-mauve-dark italic mt-2">{work.note}</p>
              )}
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
