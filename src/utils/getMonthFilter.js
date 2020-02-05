const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';

export const getMonthFilter = () => {
  return {
    absoluteDateFilter: {
      dataSet: {
        uri: dateAttribute
      },
      from: "2016-01-01",
      to: "2016-01-31"
    }
  };
};
