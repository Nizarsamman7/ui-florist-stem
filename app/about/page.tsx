import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Studio"}</p>
      <h1>{"Two florists and a Saturday helper."}</h1>
      <p className="lede">{"Stem & Soil buys at the market twice a week and from one grower outside the city. We waste less by making fewer shapes."}</p>
      <p>{"We are not a same-hour delivery app. If you need a specific rose from a photo, we are the wrong studio."}</p>
      
      
      
      
    </article>
  );
}
