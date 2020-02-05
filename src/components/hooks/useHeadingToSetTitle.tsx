import { useEffect, useContext } from "react";
import { strings } from "../../library/strings";
import { LangContext } from "../context/LangContext";

export const useHeadingToSetTitle = (heading: string) => {
  const lang = useContext(LangContext);
  useEffect(() => {
    document.title = heading + " | " + strings.goodDataUi[lang];
  }, []);
};
