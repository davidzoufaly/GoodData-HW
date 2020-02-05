import React, { useContext } from "react";
import ColumnChartWithTitle from "../components/charts/ColumnChartWithTitle";
import { LangContext } from "../components/context/LangContext";
import RenderDropdown from "../components/forms/RenderDropdown";
import { useHandleDropdown } from "../components/hooks/useHandleDropdown";
import { useHeadingToSetTitle } from "../components/hooks/useHeadingToSetTitle";
import { useSetDates } from "../components/hooks/useSetDates";
import { getMeasures } from "../dataDefinition/getMeasures";
import { getMonthFilter } from "../dataDefinition/getMonthFilter";
import { getViewBy } from "../dataDefinition/getViewBy";
import {
  attributesUri,
  dateAttributesUri,
  measuresUri
} from "../dataDefinition/uriObjects";
import { projectId } from "../library/config";
import { currency, langs } from "../library/enums";
import { strings } from "../library/strings";
import { IndexProps } from "../types/props";
import { getMonths } from "../helpers/getMonths";

const Index: React.FC<IndexProps> = ({ heading }) => {
  const lang = useContext(LangContext);
  const [option, setOption] = useHandleDropdown();
  const date = useSetDates(option);
  useHeadingToSetTitle(heading);

  const filters = [
    getMonthFilter(date.start, date.to, dateAttributesUri.dateAttribute)
  ];

  const measures = getMeasures(
    measuresUri.grossProfitMeasure,
    `${currency.USD} ${strings.grossProfit.en}`
  );

  const viewBy = getViewBy(attributesUri.dateAttributeInMonths);

  return (
    <>
      <h1>{heading}</h1>
      <ColumnChartWithTitle
        title={`${currency.USD} ${strings.grossProfitInMonth[lang]}`}
        dropdown={
          <RenderDropdown
            defaultValue={option}
            options={getMonths(1, 12, langs[lang])}
            onChange={setOption}
          />
        }
        filters={filters}
        measures={measures}
        projectId={projectId}
      />
      <ColumnChartWithTitle
        title={`${currency.USD} ${strings.grossProfitAllMonth[lang]} 2016`}
        measures={measures}
        projectId={projectId}
        viewBy={viewBy}
      />
    </>
  );
};

export default Index;
