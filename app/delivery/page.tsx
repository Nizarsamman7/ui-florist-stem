import type { Metadata } from "next";
export const metadata: Metadata = { title: "Delivery" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Bike"}</p>
      <h1>{"Inside the ring, before noon."}</h1>
      <p className="lede">{"Order the day before for a morning drop. Same-day is sometimes possible before 10:00 and costs more."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Inside the ring"}</b><span>{"€7"}</span></div>
<div className="row"><b>{"Same-day, if we can"}</b><span>{"€14"}</span></div>
<div className="row"><b>{"Collect from studio"}</b><span>{"Free"}</span></div>
</div>
      
      
    </article>
  );
}
