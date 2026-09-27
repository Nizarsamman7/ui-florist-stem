import type { Metadata } from "next";
export const metadata: Metadata = { title: "Subscriptions" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Weekly"}</p>
      <h1>{"A wrap on the same day each week."}</h1>
      <p className="lede">{"Pause with two days' notice. The flowers change. The size stays the one you chose."}</p>
      
      
      <div className="stack">
<div className="row"><b>{"Small, weekly"}</b><span>{"€25"}</span></div>
<div className="row"><b>{"Medium, weekly"}</b><span>{"€38"}</span></div>
<div className="row"><b>{"Studio vase, monthly"}</b><span>{"€60"}</span></div>
</div>
      
      
    </article>
  );
}
