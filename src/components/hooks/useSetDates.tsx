import { useEffect, useState } from "react";
import { IDate } from "../../types/helpers";
import { firstAndLastDateOfMonth } from "../../helpers/fistAndLastDateOfMonth";

export const useSetDates = (
  month: number,
  year = 2016
): IDate => {
  const [date, setDate] = useState<IDate>({
    start: firstAndLastDateOfMonth(month, year).start,
    to: firstAndLastDateOfMonth(month, year).to
  });

  useEffect(() => {
    setDate(firstAndLastDateOfMonth(month, year));
  }, [month]);

  return date;
};
