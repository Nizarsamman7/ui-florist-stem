import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Workshops" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Hands"}</p>
      <h1>{"A Saturday morning, eight people, one bunch each."}</h1>
      <p className="lede">{"You leave with what you made. We provide stems, vessels, and coffee. Book ahead. We do not run one every week."}</p>
      
      
      
      
      <InquiryForm submitLabel={"Ask for the next date"} fields={[{"name":"name","label":"Name"},{"name":"email","label":"Email","type":"email"},{"name":"seats","label":"Seats","type":"select","options":["1","2"]}]} />
    </article>
  );
}
