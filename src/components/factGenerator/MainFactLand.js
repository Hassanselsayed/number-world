import React, { Component } from "react";

class MainFactLand extends Component {
    constructor() {
        super();
        this.state = {
            userInput: "",
        }
    }

    // tracking change in user's number choice
    handleChange = (e) => {
        this.setState({
            userInput: e.target.value,
        })
    }

    render() {
        return (
            <main>
                <form action="" onSubmit={
                        (e) => { 
                                this.props.chosenNumberHandler(e, this.state.userInput);
                                this.setState({
                                    userInput: "",
                                });
                            }
                    }
                >
                    <label htmlFor="numberInput"><h3>Please choose a number (1 to 100):<span className="sr-only">1 to 100</span></h3></label>
                    <input
                        autoComplete="off"
                        type="number"
                        id="numberInput"
                        min="1"
                        max="100"
                        title="1 to 100"
                        onChange={this.handleChange}
                        value={this.state.userInput}
                        required
                    />
                    <button>Submit</button>
                </form>
                <p>or</p>
                <form action="" onSubmit={(e) => this.props.randomNumberHandler(e)}>
                    <h3>Generate a number randomly (1 to 100):</h3>
                    <button id="randomGenerator">Submit</button>
                </form>
                <div className="results">
                    <h2>Number chosen/generated: {this.props.usedNumber}</h2>
                    <h2>Fact about that number:</h2>
                    <ul>
                        {/* trivia facts will be added dynamically here after being fetched from the numbers API*/}
                        {this.props.triviaFact !== "" ? <li>{this.props.triviaFact}</li> : null}
                    </ul>
                </div>
            </main>
        );
    }
}

export default MainFactLand;