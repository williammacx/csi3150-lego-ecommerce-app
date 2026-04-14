import arkham from "./assets/arkham.png";
import batmobile from "./assets/batmobile.png";
import citytower from "./assets/citytower.png";
import burgertruck from "./assets/burgertruck.png";
import mandalore from "./assets/mandaloresiege.png";
import speeder from "./assets/speeder.png";
import taxi from "./assets/taxi.png";
import atte from "./assets/atte.png";
import batlogo from "./assets/batlogo.png"

const productData = [
  { id: 1, name: "City Tower", category: "City", price: 209.99, stock: 4, image: citytower},
  { id: 2, name: "Batmboile", category: "Batman", price: 29.99, stock: 6, image: batmobile},
  { id: 3, name: "Burger Truck", category: "City", price: 19.99, stock: 5, image: burgertruck},
  { id: 4, name: "Bat Logo", category: "Batman", price: 79.99, stock: 8, image: batlogo},
  { id: 5, name: "AT-TE", category: "Star Wars", price: 139.99, stock: 7, image: atte},
  { id: 6, name: "Taxi", category: "City", price: 14.99, stock: 3, image: taxi},
  { id: 7, name: "Arkham Asylum", category: "Batman", price: 299.99, stock: 4, image: arkham},
  { id: 8, name: "Siege of Mandalore", category: "Star Wars", price: 22.99, stock: 3, image: mandalore},
  { id: 9, name: "Mandalorian Speeder", category: "Star Wars", price: 9.99, stock: 9, image: speeder}
];

export default productData;