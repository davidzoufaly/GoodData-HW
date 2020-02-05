/**
 * Set from date
 * @param from
 * @format YYYY-MM-DD
 * 
 * Set to date
 * @param to
 * @format YYYY-MM-DD
 */

export const getMonthFilter = (from: string, to: string, uri: string) => {
  return {
    absoluteDateFilter: {
      dataSet: {
        uri
      },
      from,
      to
    }
  };
};
