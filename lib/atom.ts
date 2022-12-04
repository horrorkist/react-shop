import { atom, selector, selectorFamily } from "recoil";
import { IProduct } from "../src/components/ProductCard";

export const themeState = atom({
  key: "theme",
  default: "dark",
});

export interface ICartProduct {
  product: IProduct;
  quantity: number;
}

export const cartState = atom<ICartProduct[]>({
  key: "cart",
  default: [],
});

export const cartQuantityState = selector({
  key: "cartQuantity",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  },
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
      [...products.filter((product) => product.category === "패션")],
      [...products.filter((product) => product.category === "액세서리")],
      [...products.filter((product) => product.category === "디지털")],
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
        return products.filter((product) => product.category === "패션");
      }

      if (category === "accessory") {
        return products.filter((product) => product.category === "액세서리");
      }

      if (category === "digital") {
        return products.filter((product) => product.category === "디지털");
      }
    },
});

export const getProductById = selectorFamily({
  key: "getProductById",
  get:
    (id: string) =>
    ({ get }) => {
      const products = get(productsState);
      return products.find((product) => product.id === parseInt(id));
    },
});
