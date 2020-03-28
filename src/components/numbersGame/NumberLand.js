import React, { Component } from "react";

// custom imports
import axios from "axios";

class NumberLand extends Component {

    constructor() {
        super();

        this.state = {
            userSelection: "",
            expression: "",
            question: "",
            userAnswer: "",
            correctAnswer: "",
            outcome: ""
        }
    }

    // making the numbers game API call
    newtonApi = (expression) => {
        axios({
            url: `https://newton.now.sh/${expression}`,
            method: "GET",
            responseType: "json",
        }).then((res) => {
            this.setState({
                expression: `${res.data.operation}:`,
                question: res.data.expression,
                correctAnswer: res.data.result
            })
        });
    }

    // fetching the user difficulty level selection and appending a question to the page
    submitUserChoice = (e) => {
        e.preventDefault();
        this.setState({
            userAnswer: "",
            outcome: ""
        })
        document.getElementById("userAnswer").focus();
        if (this.state.userSelection === "easy") {
            this.newtonApi("simplify/2^2+2(2)");
        } else if (this.state.userSelection === "medium") {
            this.newtonApi("factor/x^2-1");
        } else {
            this.newtonApi("integrate/x^2+2x");
        } 
    }

    // evaluating the user's answer and comparing it to the correct answer
    evaluateAnswer = (e) => {
        e.preventDefault();
        if (this.state.userSelection !== "") {
            if (this.state.userAnswer === this.state.correctAnswer) {
                this.setState({
                    outcome: "Correct answer!"
                })
            } else {
                this.setState({
                    outcome: "Try again"
                })
            }
        } else {
            document.getElementById("difficultyLevel").focus();
            this.setState({
                outcome: "Please select a difficulty level first"
            })
        }
        this.setState({
            userAnswer: ""
        })
    }

    // listening for change in difficulty level selection
    getUserChoice = (event) => {
        this.setState({
            userSelection: event.target.value,
        })
    }

    // tracking change in user's answer
    handleChange = (e) => {
        this.setState({
            userAnswer: e.target.value,
        })
    }

    render() {
        return (
            <div className="NumberLand wrapper">
                <h1>Numbers Game</h1>

                {/* form to choose difficulty level */}
                <form action="" onSubmit={this.submitUserChoice}>
                    <h2>Please choose a difficulty level</h2>
                    <select onChange={this.getUserChoice} name="difficultyLevel" id="difficultyLevel" defaultValue="none">
                        <option value="none" disabled>Choose a difficulty level</option>
                        <option value="easy">What is Math?</option>
                        <option value="medium">Meh</option>
                        <option value="hard">My middle name is Gauss</option>
                    </select>
                    <button>Choose level</button>
                </form>

                {/* form to submit answer */}
                <form action="" onSubmit={this.evaluateAnswer}>
                    <h2>Solve the following expression (after choosing difficulty)</h2>
                    
                    {/* math expression will be added here after being fetched from the API */}
                    <p className="dynamicContent"><span>{this.state.expression}</span>{this.state.question}</p>
                    <label htmlFor="userAnswer">Please enter your answer</label>
                    <input 
                        autoComplete="off"
                        type="text"
                        id="userAnswer"
                        onChange={this.handleChange}
                        value={this.state.userAnswer}
                        required
                    />
                    <button>Submit answer</button>
                </form>
                {/* outcome will be added here after cross-referencing the user answer with the correct answer */}
                <p className="dynamicContent outcome">{this.state.outcome}</p>

                {/* button to change page to FactLand */}
                <button onClick={this.props.changePage} className="changePage">Go to Facts Generator</button>
            </div>
        );
    }
}

export default NumberLand;