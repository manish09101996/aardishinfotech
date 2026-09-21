import { fetchAPI } from "@/lib/api";
import Banner from "@/components/banner";
import Services from "@/components/services";
import DemoSection from "@/components/demo";
import Tools from "@/components/tools";
import Blog from "@/components/blog";
import TestimonialSec from "@/components/testimonials";
import Portfolio from "@/components/portfolio";
import DigitalPartner from "@/components/digital-partner";

export default async function HomePage() {
  const [page, posts] = await Promise.all([
    fetchAPI("/wp/v2/pages/2"),
    fetchAPI("/wp/v2/posts?_embed&per_page=3"),
  ]);

  return (
    <>
      <Banner data={page.acf} />
      <Services data={page.acf} />
      <Portfolio data={page.acf} />
      <DigitalPartner />
      <TestimonialSec data={page.acf} />
      <Tools data={page.acf} />
      <Blog data={page.acf} posts={posts} />
      <DemoSection />
    </>
  );
}