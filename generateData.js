const { random, commerce, image } = require("faker");
const fs = require("fs");
const generateProducts = () => {
  return [...Array(30)].map(() => ({
    id: random.uuid(),
    name: commerce.productName(),
    image: `https://picsum.photos/id/${random.number(200)}/600/600`,
    price: commerce.price(1, 1000, 2),
    quantity: random.number(6),
    description: random.words(50),
    category: commerce.department(),
    brand: random.word()
  }));
};
const init = () => {
  const products = { products: generateProducts() };
  fs.writeFileSync("./db.json", JSON.stringify(products, null, 2));
};
init();
