import { atom, selector } from "recoil";
import { IProduct } from "../src/components/ProductCard";

export const themeState = atom({
  key: "theme",
  default: "dark",
});

export const productsState = atom<IProduct[]>({
  key: "products",
  default: [],
});

export const productsFiltered = selector({
  key: "productsFiltered",
  get: ({ get }) => {
    const products = get(productsState);
    return [
      [...products.filter((product) => product.category.includes("clothing"))],
      [...products.filter((product) => product.category === "jewelery")],
      [...products.filter((product) => product.category === "electronics")],
    ];
  },
});
