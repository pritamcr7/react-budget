export const currencyFormatter = (number) =>
  new Intl.NumberFormat(undefined, {
    currency: "inr",
    style: "currency",
    minimumFractionDigits: 0,
  }).format(number);
