import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      {/* Hero section */}
      <section className="mb-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 text-purple">
          Nycole Ray
        </h1>
        <p className="text-lg md:text-xl text-purple-light max-w-2xl">
          Choreographer, dancer, and educator based in Dallas, Texas.
        </p>
      </section>

      {/* Bio */}
      <section className="space-y-6">
        <p className="text-base md:text-lg leading-relaxed text-purple-dark">
          Nycole Ray is a choreographer, dancer, and educator based in Dallas,
          Texas. A native of Detroit, Michigan, she holds a BFA in Dance from
          The California Institute of the Arts, with additional training at the
          London Contemporary Dance School, Wayne State University, and the
          California State Summer School of the Arts.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-purple-dark">
          As a performer, Nycole danced with Dallas Black Dance Theatre, Bruce
          Wood Dance Project, Lula Washington Dance Theater, Dayton Contemporary
          Dance Company II, and Zadonu African Dance Company. She has worked
          with choreographers including Donald McKayle, Dianne McIntyre, Alonzo
          King, Donald Byrd, Rennie Harris, Christopher L. Huggins, and Camille
          A. Brown. Bruce Wood created the solo{" "}
          <em>The Edge of My Life&hellip; So Far</em> for her.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-purple-dark">
          Her choreography has been commissioned and performed by Texas Ballet
          Theater, The Dallas Opera, Dallas Museum of Art, Dallas Symphony
          Orchestra, Dallas Black Dance Theatre, DBDT: Encore!, and Bruce Wood
          Dance Dallas. In 2025, she was one of three choreographers selected
          for Texas Ballet Theater&apos;s <em>International Woman</em>
          program&mdash;the company&apos;s first commission of women
          choreographers in 20 years.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-purple-dark">
          From 2009 to 2024, Nycole served as Artistic Director of DBDT:
          Encore!, Dallas Black Dance Theatre&apos;s second company, where she
          mentored emerging professional dancers. Over 60% of DBDT&apos;s
          current company members trained under her direction.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-purple-dark">
          Nycole is a certified Dunham Technique Instructor. She received the
          Natalie Skelton Award for Artistic Excellence from the Dance Council
          of North Texas in 2013 and was named one of D Magazine&apos;s
          &ldquo;Women Who Make Dallas Great&rdquo; in 2021.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-purple-dark font-medium">
          She is available for choreography commissions, guest artist
          residencies, master classes, and speaking engagements.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-16 pt-8 border-t border-mauve-light">
        <div className="flex flex-wrap gap-4">
          <Link
            href="/work"
            className="inline-flex items-center px-6 py-3 bg-gold text-purple-dark text-sm font-medium rounded hover:bg-gold-light transition-colors focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
          >
            View Repertory
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-mauve text-purple text-sm font-medium rounded hover:border-purple hover:bg-mauve-light/30 transition-colors focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
