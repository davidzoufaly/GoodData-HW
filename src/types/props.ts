import { IColumnChartProps } from "@gooddata/react-components/dist/components/ColumnChart";
import { ChangeEvent } from "react";

export interface RenderDropdownProps {
  options: string[];
  defaultValue?: number;
  onChange: (e: ChangeEvent<HTMLElement>) => void;
}

export interface ColumnChartWithTitleProps extends IColumnChartProps {
  title: React.ReactNode;
  dropdown?: JSX.Element;
}

export interface IndexProps {
  heading: string;
}
