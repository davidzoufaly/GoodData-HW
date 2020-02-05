import { strings } from "../library/strings";

type Months = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const getMonths = (
  fromIncluded: Months,
  toIncluded: Months,
  lang: string
) => {
  const months = [
    strings.january[lang],
    strings.february[lang],
    strings.march[lang],
    strings.april[lang],
    strings.may[lang],
    strings.june[lang],
    strings.july[lang],
    strings.august[lang],
    strings.september[lang],
    strings.october[lang],
    strings.november[lang],
    strings.december[lang]
  ];

  let arr: string[] = [];

  for (let i = fromIncluded; i <= toIncluded; i++) {
    arr.push(months[i - 1]);
  }

  return arr;
};
