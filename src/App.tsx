// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import "@gooddata/react-components/styles/css/main.css";
import React from "react";
import { langs } from "./library/enums";
import { strings } from "./library/strings";
import Index from "./pages/Index";
import { LangContext } from "./components/context/LangContext";


class App extends React.Component<{}, { lang: langs }> {
  constructor(props) {
    super(props);
    this.state = { lang: langs.en };
    // can be modified with language switcher etc...
  }

  render() {
    return (
      <LangContext.Provider value={this.state.lang}>
        <div className="App">
          <Index heading={strings.grossProfit[this.state.lang]} />
        </div>
      </LangContext.Provider>
    );
  }
}

export default App;
