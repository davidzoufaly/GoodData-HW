import { ColumnChart } from "@gooddata/react-components";
import React from "react";
import { ColumnChartWithTitleProps } from "../../types/props";

const ColumnChartWithTitle: React.FC<ColumnChartWithTitleProps> = ({
  measures,
  filters,
  projectId,
  viewBy,
  title,
  dropdown,
}) => {
  return (
    <>
      <h2>{title}</h2>
      {dropdown}
      <div>
        <ColumnChart
          measures={measures}
          filters={filters}
          projectId={projectId}
          viewBy={viewBy}
        />
      </div>
    </>
  );
};

export default ColumnChartWithTitle;
