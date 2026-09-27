const stems = [
  ["a", "Market wrap", "Seasonal stems, kraft paper", "€28"],
  ["b", "Table low", "Low bowl for a dinner", "€55"],
  ["c", "Hand-tied", "A named bouquet", "€42"],
];

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
