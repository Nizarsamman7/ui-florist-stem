import Link from "next/link";

const stems = [
  ["a", "Market wrap", "Seasonal stems, kraft paper", "€28"],
  ["b", "Table low", "Low bowl for a dinner", "€55"],
  ["c", "Hand-tied", "A named bouquet", "€42"],
];

export default function HomePage() {
  return (
    <div className="wrap">
      <aside className="side">
        <strong>Stem &amp; Soil</strong>
        <p>Studio flowers. Cut twice a week.</p>
        <nav>
          <a href="#list">Arrangements</a>
          <Link href="/arrangements">Order</Link>
        </nav>
      </aside>
      <main className="main">
        <section className="offset">
          <p>De Pijp studio</p>
          <h1>What the market had this morning.</h1>
        </section>
        <section className="stems" id="list">
          {stems.map(([tone, name, text, price]) => (
            <article className="stem" key={name}>
              <span className={tone === "a" ? "swatch" : tone === "b" ? "swatch b" : "swatch c"} />
              <div><h2>{name}</h2><p>{text}</p></div>
              <b>{price}</b>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
