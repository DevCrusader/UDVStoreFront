export const STORE_TYPES = {
  COLLECTIONS: {
    UPLOAD: "STORE/COLLECTIONS/UPLOAD",
    DELETE: "STORE/COLLECTIONS/DELETE",
    CLEAR: "STORE/COLLECTIONS/CLEAR",

    START_FETCH: "STORE/COLLECTIONS/START_FETCH",
    FINISH_FETCH: "STORE/COLLECTIONS/FINISH_FETCH",
    SET_ERROR: "STORE/COLLECTIONS/SET_ERROR",
    SET_PRODUCTS: "STORE/COLLECTIONS/SET_PRODUCTS",
  },
  PRODUCTS: {
    START_FETCH: "STORE/PRODUCTS/START_FETCH",
    FINISH_FETCH: "STORE/PRODUCTS/FINISH_FETCH",
    SET_ERROR: "STORE/PRODUCTS/SET_ERROR",

    ADD_INFO: "STORE/PRODUCTS/ADD_INFO",
    DELETE: "STORE/PRODUCTS/DELETE",
    CLEAR_ITEM: "STORE/PRODUCTS/CLEAR_ITEM",
    CLEAR: "STORE/PRODUCTS/CLEAR",
  },
};

export const USER_TYPES = {
  INFO: {
    SET: "USER_TYPES/INFO/SET",
    DELETE: "USER_TYPES/INFO/DELETE",
    CLEAR: "USER_TYPES/INFO/CLEAR",

    UPDATE_BALANCE: "USER_TYPES/INFO/UPDATE_BALANCE",

    START_FETCH: "USER_TYPES/INFO/START_FETCH",
    FINISH_FETCH: "USER_TYPES/INFO/FINISH_FETCH",
    SET_ERROR: "USER_TYPES/INFO/SET_ERROR",
  },
  CART: {
    UPLOAD: "USER_TYPES/CART/UPLOAD",
    UPDATE: "USER_TYPES/CART/UPDATE",
    DELETE: "USER_TYPES/CART/DELETE",
    CLEAR: "USER_TYPES/CART/CLEAR",

    START_FETCH: "USER_TYPES/CART/START_FETCH",
    FINISH_FETCH: "USER_TYPES/CART/FINISH_FETCH",
    SET_ERROR: "USER_TYPES/CART/SET_ERROR",
  },
  TOKENS: {
    SET: "USER_TYPES/TOKENS/SET",
    CLEAR: "USER_TYPES/TOKENS/CLEAR",
  },
};
