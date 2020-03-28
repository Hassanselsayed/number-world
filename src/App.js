import React, { Component } from "react";
import "./App.css";

// custom imports
import { Helmet } from "react-helmet";
import Factland from "./components/factGenerator/FactLand";
import NumberLand from "./components/numbersGame/NumberLand";

class App extends Component {

  constructor() {
    super();

    this.state = {
      factLand: true,
    }
  }

  // toggling between pages
  changePageHandler = () => {
    if (this.state.factLand) {
      this.setState({
        factLand: false,
      })
    } else {
      this.setState({
        factLand: true,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Number World</title>
        </Helmet>
        {
          this.state.factLand
            ? <Factland changePage={this.changePageHandler} />
            : <NumberLand changePage={this.changePageHandler} />
        }
      </div>
    );
  }
}

export default App;
