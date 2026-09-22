"use client";

import { useMemo, useEffect, useState } from "react";

type TocItem = {
  id: string;
  text: string;
  level: number;
};

type Props = {
  content: string;
};

/* =========================
   REMOVE HTML FROM HEADING
========================= */

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").trim();
}

/* =========================
   DECODE HTML ENTITIES
========================= */

function decodeHtmlEntities(text: string) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
}

/* =========================
   CREATE URL FRIENDLY ID
========================= */

function slugify(text: string) {
  return decodeHtmlEntities(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/* =========================
   ADD IDS TO WORDPRESS HEADINGS
========================= */

function prepareContent(content: string) {
  const toc: TocItem[] = [];
  const usedIds = new Set<string>();

  const updatedContent = content.replace(
    /<(h2|h3)([^>]*)>([\s\S]*?)<\/\1>/gi,
    (match, tag, attributes, innerHTML) => {
      const text = stripHtml(innerHTML);

      if (!text) {
        return match;
      }

      const baseId = slugify(text);

      let id = baseId || "section";

      let counter = 1;

      /* Handle duplicate headings */

      while (usedIds.has(id)) {
        id = `${baseId}-${counter}`;
        counter++;
      }

      usedIds.add(id);

      /* Add ID to actual WordPress heading */

      const cleanAttributes = attributes
        .replace(/\s+id=["'][^"']*["']/i, "")
        .trim();

      const heading = `<${tag}${
        cleanAttributes
          ? ` ${cleanAttributes}`
          : ""
      } id="${id}">${innerHTML}</${tag}>`;

      /* Add heading to TOC */

      toc.push({
        id,
        text: decodeHtmlEntities(text),
        level: tag.toLowerCase() === "h2" ? 2 : 3,
      });

      return heading;
    }
  );

  return {
    toc,
    content: updatedContent,
  };
}

/* =========================
   COMPONENT
========================= */

export default function CaseStudyContent({
  content,
}: Props) {

  const {
    toc,
    content: contentWithIds,
  } = useMemo(
    () => prepareContent(content),
    [content]
  );

  const [activeId, setActiveId] = useState("");

  /* =========================
     CLICK TOC ITEM
  ========================= */

  const handleTocClick = (id: string) => {
    setActiveId(id);
  };

  /* =========================
     DETECT CURRENT SECTION
  ========================= */

  useEffect(() => {

    if (!toc.length) return;

    const headings = document.querySelectorAll(
      ".case-study-content h2, .case-study-content h3"
    );

    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {

        const visibleHeadings = entries
          .filter(
            (entry) => entry.isIntersecting
          )
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top
          );

        if (visibleHeadings.length > 0) {

          setActiveId(
            visibleHeadings[0].target.id
          );

        }

      },
      {
        rootMargin:
          "-120px 0px -65% 0px",

        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };

  }, [toc]);

  /* =========================
     RENDER
  ========================= */

  return (
    <div className="case-study-layout">

      {/* =========================
          TABLE OF CONTENTS
      ========================= */}

      {toc.length > 0 && (

        <aside className="case-study-toc">

          <div className="toc-inner">

            <div className="toc-label">
              CONTENT
            </div>

            <h3>
              Table of Contents
            </h3>

            <nav
              aria-label="Table of contents"
            >

              <ul>

                {toc.map((item) => (

                  <li
                    key={item.id}
                    className={
                      item.level === 3
                        ? "toc-subitem"
                        : ""
                    }
                  >

                    <a
                      href={`#${item.id}`}
                      className={
                        activeId === item.id
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        handleTocClick(item.id)
                      }
                    >

                      <span className="toc-dot">

                        {activeId === item.id
                          ? "●"
                          : "○"}

                      </span>

                      <span>
                        {item.text}
                      </span>

                    </a>

                  </li>

                ))}

              </ul>

            </nav>

          </div>

        </aside>

      )}

      {/* =========================
          CASE STUDY CONTENT
      ========================= */}

      <article
        className="case-study-content"
        dangerouslySetInnerHTML={{
          __html: contentWithIds,
        }}
      />

    </div>
  );
}