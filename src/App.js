import React, { useMemo } from "react";
import ReactDom from "react-dom";
import Table from "./Table";
class App extends React.Component {
  render() {
    return <Table />;
  }
}
ReactDom.render(<App />, document.getElementById("root"));
