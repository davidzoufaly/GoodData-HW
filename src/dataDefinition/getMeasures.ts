
export const getMeasures = (uri: string, alias: string) => {
  return [
    {
      measure: {
        localIdentifier: "m1",
        definition: {
          measureDefinition: {
            item: {
              uri
            }
          }
        },
        alias
      }
    }
  ];
};
