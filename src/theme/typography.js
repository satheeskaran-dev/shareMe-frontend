import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["PT Sans:300,400,500,600,700", "sans-serif"],
  },
});

export const typography = {
  fontFamily: ["PT Sans", "sans-serif"].join(","),
  h1: {
    fontSize: "30px",
    fontWeight: 500,
  },
  h2: {
    fontSize: "24px",
    fontWeight: 500,
  },
  h4: {
    fontSize: "21px",
    fontWeight: 400,
  },
  h5: {
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "22px",
  },
  h6: {
    fontSize: "18px",
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: "16px",
    fontWeight: 500,
  },
  subtitle2: {
    fontSize: "14px",
    fontWeight: 500,
  },
  body1: {
    fontSize: "14px",
    fontWeight: 400,
  },
  body2: {
    fontSize: "14px",
    fontWeight: 300,
  },
  caption: {
    fontSize: "12px",
    fontWeight: 400,
  },
  overline: {
    fontSize: "12px",
    fontWeight: 300,
    lineHeight: "none",
    textTransform: "none",
  },
};
