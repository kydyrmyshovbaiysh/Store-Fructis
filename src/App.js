import "./App.css";
import Test from "./Test";
import Header from "./Header/Header";
import Goods from "./Goods";

const headerData = {
  site_name: "my test site name",
  nav: [
    { link: "nav1", text: "my link1" },
    { link: "nav2", text: "my link2" },
    { link: "nav3", text: "my link3" },
  ],
};

const goods = [
  {
    title: "apple",
    cost: 330,
    image:
      "https://cdn4.iconfinder.com/data/icons/fruits-79/48/19-green_apple-64.png",
  },
  {
    title: "apple",
    cost: 500,
    image:
      "https://cdn4.iconfinder.com/data/icons/fruits-79/48/08-orange-64.png",
  },
  {
    title: "pear",
    cost: 420,
    image: "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Pear-64.png",
  },
];

function App() {
  return (
    <>
      <Header data={headerData} />
      <Test />

      {goods.map((item) => (
        <Goods title={item.title} cost={item.cost} image={item.image} />
      ))}
    </>
  );
}

export default App;
