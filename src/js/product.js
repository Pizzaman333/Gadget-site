import productsTemplate from "../templates/products.hbs"
import productsData from "../data/products.json"

const products = productsData.products;
const productsLayout = productsTemplate({products});
document.querySelector(".products").innerHTML = productsLayout;