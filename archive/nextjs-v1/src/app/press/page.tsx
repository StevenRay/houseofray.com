import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press | Nycole Ray",
  description:
    "Press coverage and media features about choreographer Nycole Ray.",
};

interface PressItem {
  title: string;
  publication: string;
  date: string;
  url?: string;
}

interface PressYear {
  year: string;
  items: PressItem[];
}

const pressCoverage: PressYear[] = [
  {
    year: "2025",
    items: [
      {
        title: "Texas Ballet Theater Adds to the Lamentation Variations Canon",
        publication: "Pointe Magazine",
        date: "February 21, 2025",
      },
      {
        title:
          "Texas Ballet Theater debuts first commission of women choreographers in 20 years",
        publication: "KERA News",
        date: "February 20, 2025",
      },
      {
        title:
          "Texas Ballet Theater debuts first commission of women choreographers in 20 years",
        publication: "Dallas Morning News",
        date: "February 20, 2025",
      },
      {
        title:
          "Nycole Ray Leads DBDT: Encore! into 25th Anniversary Celebration with Rising Excellence",
        publication: "PR Newswire",
        date: "April 18, 2025",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Featured Artist",
        publication: "ACANSA Arts Festival",
        date: "2024",
      },
    ],
  },
  {
    year: "2021",
    items: [
      {
        title: "Women Who Make Dallas Great",
        publication: "D Magazine",
        date: "2021",
      },
      {
        title: "DBDT: Encore! Dancing Beyond Borders",
        publication: "NBC DFW",
        date: "September 9, 2021",
      },
    ],
  },
  {
    year: "2020",
    items: [
      {
        title: "Dallas Black Dance Theatre's Dancing Beyond Borders Series",
        publication: "NBC DFW",
        date: "February 26, 2020",
      },
    ],
  },
  {
    year: "2018",
    items: [
      {
        title: "Meet Nycole Ray of Dallas Black Dance Theatre",
        publication: "Voyage Dallas",
        date: "April 3, 2018",
      },
    ],
  },
  {
    year: "2017",
    items: [
      {
        title: "DBDT: Encore! Rising Excellence",
        publication: "TheaterJones",
        date: "April 10, 2017",
      },
    ],
  },
  {
    year: "2016",
    items: [
      {
        title: "Nycole Ray",
        publication: "Art&Seek",
        date: "October 4, 2016",
      },
    ],
  },
  {
    year: "2013",
    items: [
      {
        title:
          "Ann Etgen and Bill Atkinson, Nycole Ray and More Receive 2013 Dance Council of North Texas Honors",
        publication: "Broadway World",
        date: "June 12, 2013",
      },
    ],
  },
];

export default function PressPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <header className="mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-4 text-purple">Press</h1>
        <p className="text-lg text-purple-light">
          Selected press coverage &amp; features
        </p>
      </header>

      <div className="space-y-12">
        {pressCoverage.map((yearGroup) => (
          <section key={yearGroup.year}>
            <h2 className="font-serif text-2xl mb-6 text-purple">
              {yearGroup.year}
            </h2>
            <ul className="space-y-4">
              {yearGroup.items.map((item, index) => (
                <li
                  key={index}
                  className="border-l-2 border-gold pl-4 py-1"
                >
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <p className="text-purple-dark group-hover:text-gold transition-colors">
                        &ldquo;{item.title}&rdquo;
                      </p>
                      <p className="text-sm text-mauve-dark mt-1">
                        <span className="italic">{item.publication}</span>
                        {item.date && ` — ${item.date}`}
                      </p>
                    </a>
                  ) : (
                    <>
                      <p className="text-purple-dark">
                        &ldquo;{item.title}&rdquo;
                      </p>
                      <p className="text-sm text-mauve-dark mt-1">
                        <span className="italic">{item.publication}</span>
                        {item.date && ` — ${item.date}`}
                      </p>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
