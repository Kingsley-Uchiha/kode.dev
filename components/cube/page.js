export default function Cube() {
  const cardArray = [
    { name: "js", img: "/jsd.png" },
    { name: "css", img: "/cssd.png" },
    { name: "html", img: "/htmld.png" },
  ];
  cardArray.sort(() => 0.5 - Math.random());

  let cardsChosen = [];

  return (
    <div className="cube">
      <div data-card="js" className="plane back"></div>
      <div data-card="html" className="plane bottom"></div>
      <div data-card="js" className="plane right"></div>
      <div data-card="css" className="plane front"></div>
      <div data-card="html" className="plane left"></div>
      <div data-card="css" className="plane top"></div>
    </div>
  );
}