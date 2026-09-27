import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Studio"}</p>
      <h1>{"Write or call +31 20 123 4560."}</h1>
      <p className="lede">{"For a funeral tomorrow, call."}</p>
      
      
      
      
      <InquiryForm submitLabel={"Send"} fields={[{"name":"name","label":"Name"},{"name":"email","label":"Email","type":"email"},{"name":"phone","label":"Phone","type":"tel"},{"name":"note","label":"Message","type":"textarea"}]} />
    </article>
  );
}
