import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchAPI } from "@/lib/api";
import CaseStudyContent from "@/components/CaseStudyContent";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const posts = await fetchAPI(
    `/wp/v2/case-study?slug=${params.slug}&_embed`
  );

  if (!posts || posts.length === 0) {
    return {
      title: "Case Study | Aardish Infotech",
    };
  }

  const caseStudy = posts[0];

  return {
    title: `${caseStudy.title.rendered} | Aardish Infotech`,
    description:
      "Explore this Aardish Infotech case study and learn about the project, solution, and results.",
  };
}

export default async function CaseStudyPage({
  params,
}: Props) {

  const posts = await fetchAPI(
    `/wp/v2/case-study?slug=${params.slug}&_embed`
  );

  if (!posts || posts.length === 0) {
    notFound();
  }

  const caseStudy = posts[0];

  const featuredImage =
    caseStudy._embedded?.["wp:featuredmedia"]?.[0]
      ?.source_url;


  return (

    <>
    {/* HERO */}
      <section className="case-study-hero">
        <div className="container">

          <span className="case-study-label">
            CASE STUDY
          </span>

          <h1
            dangerouslySetInnerHTML={{
              __html: caseStudy.title.rendered,
            }}
          />

          {featuredImage && (
            <div className="case-study-featured-image">

              <Image
                src={featuredImage}
                width={1536}
                height={1024}
                alt={caseStudy.title.rendered}
                priority
              />

            </div>
          )}

        </div>
      </section>
       <main className="single-case-study">

      


      {/* CONTENT */}
      <section className="case-study-content-section">
        <div className="container">

          
          <CaseStudyContent
  content={caseStudy.content.rendered}
/>

        </div>
      </section>

    </main>
      </>
   
  );
}