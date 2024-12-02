function ItemList() {
  const items = [
    "manike",
    "magice",
    "ruth",
    "aline",
    "nixon",
    "love",
    "masera",
    "muneza",
    "fofo",
    "edison",
  ];
  return (
    <div className="comp">
      {items.map((i) => (
        <p>{i}</p>
      ))}
    </div>
  );
}

export default ItemList;
