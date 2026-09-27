import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Gift" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Note"}</p>
      <h1>{"A wrap with a card, delivered."}</h1>
      <p className="lede">{"Write the message in the form. We copy it by hand. We do not do printed poems."}</p>
      
      
      
      
      <InquiryForm submitLabel={"Send"} fields={[{"name":"name","label":"Name"},{"name":"email","label":"Email","type":"email"},{"name":"phone","label":"Phone","type":"tel"},{"name":"note","label":"Message","type":"textarea"}]} />
    </article>
  );
}
