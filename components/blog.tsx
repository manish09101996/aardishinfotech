"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "@/styles/blogs.scss";

export default function BlogClient({ data, posts }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="blog-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 blog-content">
            <span className="subheading">{data.blog_subheading}</span>
            <h3>
              {data.blog_heading} <span>{data.blog_heading_purple}</span>
            </h3>
            <p>{data.blog_description}</p>
          </div>
        </div>

        <div className="row blog-post">
          {posts.map((post: any) => {
            const image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "/placeholder.jpg";

            return (
              <div className="col-sm-4" key={post.id}>
                <div className="blog-card">
                  <img src={image} alt={post.title.rendered} />

                  <h4 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
