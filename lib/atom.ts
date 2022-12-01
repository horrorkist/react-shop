import { atom, selector, selectorFamily } from "recoil";
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

export const productsFilteredByCategory = selectorFamily({
  key: "productsFilteredByCategory",
  get:
    (category: string) =>
    ({ get }) => {
      const products = get(productsState);

      if (category === "fashion") {
        return products.filter((product) =>
          product.category.includes("clothing")
        );
      }

      if (category === "accessory") {
        return products.filter((product) => product.category === "jewelery");
      }

      if (category === "digital") {
        return products.filter((product) => product.category === "electronics");
      }
    },
});
