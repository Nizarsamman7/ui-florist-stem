import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Order" };

export default function ArrangementsPage() {
  return (
    <div className="wrap">
      <aside className="side">
        <strong><Link href="/">Stem &amp; Soil</Link></strong>
        <p>Delivery inside the ring before noon.</p>
      </aside>
      <main className="main">
        <div className="pad">
          <h1>Order a wrap</h1>
          <InquiryForm
            submitLabel="Request flowers"
            fields={[
              { name: "name", label: "Name" },
              { name: "phone", label: "Phone", type: "tel" },
              { name: "piece", label: "Piece", type: "select", options: ["Market wrap", "Table low", "Hand-tied"] },
              { name: "note", label: "Colour or note", type: "textarea" },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
