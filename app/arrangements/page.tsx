import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Arrangements" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Order"}</p>
      <h1>{"Three shapes we make every week."}</h1>
      <p className="lede">{"Tell us the occasion and a colour you do not want. We do not copy a photo stem for stem."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Market wrap"}</b><span>{"€28"}</span></div>
<div className="row"><b>{"Hand-tied"}</b><span>{"€42"}</span></div>
<div className="row"><b>{"Table low"}</b><span>{"€55"}</span></div>
<div className="row"><b>{"Larger bowl"}</b><span>{"From €85"}</span></div>
</div>
      
      <InquiryForm submitLabel={"Request flowers"} fields={[{"name":"name","label":"Name"},{"name":"phone","label":"Phone","type":"tel"},{"name":"piece","label":"Piece","type":"select","options":["Market wrap","Table low","Hand-tied"]},{"name":"note","label":"Colour or note","type":"textarea"}]} />
    </article>
  );
}
