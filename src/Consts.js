// export const BACKEND_PATH = "http://localhost:8000";
export const BACKEND_PATH =
  "https://udv1store1api.pythonanywhere.com";

export const TOKEN_LIFE_TIME = 29 * 60;

export const FETCH_METHOD = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
};

export const CART_COUNT_ACTION = {
  ADD: "add",
  REMOVE: "remove",
};

export const PAYMENT_METHOD = {
  UCOINS: "ucoins",
  RUBLES: "rubles",
};

export const OFFICE_ADDRESSES = [
  "Шейнкмана, 123",
  "Деловой квартал",
  "Ткачей, 23",
  "Ткачей, 6",
  "Космонавтов, 15",
];

export const CONTAINER_MAX_SIZE = {
  DEFAULT: "",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  XLARGE: "xlarge",
};

export const PROMO_BANNERS = [
  {
    header: "Куратор для студентов",
    main: "Кураторы встречаются со студентами, проводят занятия, проверяют домашние задания и отчеты по практике",
    decoration: "1-Curator-Decoration.svg",
    bgColor: "#57585A",
    textColor: "#FFFFFF",
  },
  {
    header: "Посты в социальных сетях",
    main: "Делись о своей работе и достижениях в социальных сетях!",
    decoration: "2-Social-Decoration.svg",
    bgColor: "#F89C1C",
    textColor: "#000000",
  },
  {
    header: "Мероприятия",
    main: "Помогай и учавствуй во внутренних и внешних событиях компании",
    decoration: "3-Event-Decoration.svg",
    bgColor: "#E6E7E9",
    textColor: "#000000",
  },
  {
    header: "Добрые дела",
    main: "Просто делай добрые дела",
    decoration: "4-Good-Decoration.svg",
    bgColor: "#000000",
    textColor: "#FFFFFF",
  },
  {
    header: "Органгизуй своё мероприятие",
    main: "Если нет мероприятия, в котором ты хотел бы поучавствовать, то организуй его сам",
    decoration: "5-Flag-Decoration.svg",
    bgColor: "#57585A",
    textColor: "#FFFFFF",
  },
];
