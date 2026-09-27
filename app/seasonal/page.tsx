import type { Metadata } from "next";
export const metadata: Metadata = { title: "Seasonal" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Market"}</p>
      <h1>{"What we are likely to have."}</h1>
      <p className="lede">{"This is a guide, not a promise. If the tulips are finished, they are finished."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Spring"}</h2><p>{"Branches, tulips, ranunculus."}</p></article>
<article className="panel"><h2>{"Summer"}</h2><p>{"Garden roses, sweet pea, herbs."}</p></article>
<article className="panel"><h2>{"Autumn"}</h2><p>{"Dahlias, seed heads, darker foliage."}</p></article>
<article className="panel"><h2>{"Winter"}</h2><p>{"Pine, anemone, and whatever survived the market."}</p></article>
</div>
      
      
      
    </article>
  );
}
