import moment from "moment";

export const firstAndLastDateOfMonth = (month: number, year: number) => {
  const monthFormated = month < 10 ? "0" + month : month;
  const daysInMonth = moment(
    `${year}-${monthFormated}`,
    "YYYY-MM"
  ).daysInMonth();

  return {
    start: `${year}-${monthFormated}-01`,
    to: `${year}-${monthFormated}-${daysInMonth}`
  };
};
