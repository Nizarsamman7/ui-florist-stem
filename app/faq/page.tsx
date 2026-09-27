import type { Metadata } from "next";
export const metadata: Metadata = { title: "FAQ" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Stems"}</p>
      <h1>{"Before you order."}</h1>
      <p className="lede">{"Substitutions happen. We will not swap a colour you forbade."}</p>
      
      
      
      <div className="stack">
<details className="panel"><summary>{"Can I name every flower?"}</summary><p>{"For weddings, yes. For a wrap, no."}</p></details>
<details className="panel"><summary>{"Vase included?"}</summary><p>{"Only on the table-low and the subscription vase."}</p></details>
<details className="panel"><summary>{"Scent-free?"}</summary><p>{"Say so. We can avoid lilies and stock."}</p></details>
<details className="panel"><summary>{"Dogs at the studio?"}</summary><p>{"The floor is wet. Better not."}</p></details>
</div>
      
    </article>
  );
}
