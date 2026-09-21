"use client";

import "@/styles/tools.scss";

export default function Tools({ data }: any) {
  const row1 = buildRow(data, "platform", "platform", 5);
  const row2 = buildRow(data, "platform_row_2", "platform_row2", 5);

  return (
    <section className="tools-section">
      <div className="container">

        {/* HEADING */}
        <div className="tools-content">
          <span className="subheading">{data.tools_subheading}</span>
          <h3>
            {data.tools_heading} <span>{data.tools_heading_purple}</span>
          </h3>
          <p>{data.tools_description}</p>
        </div>

        {/* LEFT → RIGHT */}
        <div className="marquee">
          <div className="marquee-track">
            {row1.map((item, i) => (
              <SlideItem key={`row1-${i}`} item={item} />
            ))}
          </div>
        </div>

        {/* RIGHT → LEFT */}
        <div className="marquee reverse">
          <div className="marquee-track">
            {row2.map((item, i) => (
              <SlideItem key={`row2-${i}`} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* Slide Card */
function SlideItem({ item }: any) {
  return (
    <div className="tool-card">
      <img src={item.image.url} alt={item.name} />
      <span>{item.name}</span>
    </div>
  );
}

/* ACF Data Builder */
function buildRow(
  acf: any,
  imagePrefix: string,
  namePrefix: string,
  count = 5
) {
  const items: any[] = [];

  for (let i = 1; i <= count; i++) {
    const image = acf?.[`${imagePrefix}_image_${i}`];
    const name = acf?.[`${namePrefix}_name_${i}`];

    if (image?.url) {
      items.push({ image, name });
    }
  }

  // duplicate for seamless infinite loop
  return [...items, ...items];
}