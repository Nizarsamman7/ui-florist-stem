import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Weddings" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Day"}</p>
      <h1>{"Bridal bunch, buttonholes, and the tables."}</h1>
      <p className="lede">{"We take a small number of weddings each month. Book a season ahead if the date is a Saturday in June."}</p>
      <p>{"We visit the venue if it is in the city. Outside it, you collect from the studio the morning of the wedding."}</p>
      
      
      
      <InquiryForm submitLabel={"Send"} fields={[{"name":"name","label":"Name"},{"name":"email","label":"Email","type":"email"},{"name":"phone","label":"Phone","type":"tel"},{"name":"note","label":"Message","type":"textarea"}]} />
    </article>
  );
}
