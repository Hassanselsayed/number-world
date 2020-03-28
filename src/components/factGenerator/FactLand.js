import React, { Component } from "react";

// custom imports
import axios from "axios";
import firebase from "../../firebase";
import Qs from "qs";
import MainFactLand from "./MainFactLand";

class Factland extends Component {
    constructor() {
        super();

        this.state = {
            usedNumber: "",
            triviaFact: "",
            numbersTried: []
        }
    }

    // making the fact generator API call
    numberApi = (queryNumber) => {
        axios({
            url: "https://proxy.hackeryou.com",
            responseType: "",
            paramsSerializer: function (params) {
                return Qs.stringify(params, { arrayFormat: "brackets" })
            },
            params: {
                reqUrl: `http://numbersapi.com/${queryNumber}`,
                xmlToJSON: false
            }
        }).then((result) => {
            const copyOfNumbersTried = this.state.numbersTried;

            copyOfNumbersTried.push(queryNumber);

            this.setState({
                usedNumber: queryNumber,
                triviaFact: result.data,
                numbersTried: copyOfNumbersTried,
            })
        }).catch(() => {
            alert('please slow down');
        });
    }

    // storing data in firebase and updating the numbers tried array
    componentDidMount() {
        const dbRef = firebase.database().ref();

        dbRef.on("value", (response) => {
            const dataFromDb = response.val();

            const stateToBeSet = [];


            for (let key in dataFromDb) {
                const numberUsed = {
                    key: key,
                    name: dataFromDb[key],
                }
                stateToBeSet.push(numberUsed)
                if(stateToBeSet.length >= 11) {
                    stateToBeSet.splice(0, 1);
                }
            }

            this.setState({
                numbersTried: stateToBeSet,
            }, () => {

            })
        });
    }

    // storing the chosen number and passing it to the API call
    chosenNumberHandler = (e, chosenNumber) => {
        e.preventDefault();

        this.numberApi(chosenNumber);

        const dbRef = firebase.database().ref();
        dbRef.push(chosenNumber);
        
        document.getElementById("numberInput").focus();
    }

    // generating a random number and passing it to the API call
    randomNumberHandler = (e) => {
        e.preventDefault();
        const randomNumber = Math.floor((Math.random() * 100) + 1);
        this.numberApi(randomNumber);

        const dbRef = firebase.database().ref();
        dbRef.push(randomNumber);

        document.getElementById("randomGenerator").focus();
    }

    render() {
        return (
            <div className="FactLand wrapper">
                <h1>Facts generator</h1>
                <div className="gridSystem">
                    <aside className="leftAside">
                        <h4>Recommended numbers:</h4>
                        <ul>
                            <li>7</li>
                            <li>13</li>
                            <li>21</li>
                            <li>34</li>
                            <li>46</li>
                            <li>57</li>
                            <li>64</li>
                            <li>75</li>
                            <li>89</li>
                            <li>98</li>
                        </ul>
                    </aside>

                    <MainFactLand chosenNumberHandler={this.chosenNumberHandler} randomNumberHandler={this.randomNumberHandler} usedNumber={this.state.usedNumber} triviaFact={this.state.triviaFact} />

                    <aside className="rightAside">
                        <h4>Numbers tried (last ten):</h4>
                        <ul>
                            {/* numbers tried by the user will be added here after being stored in Firebase */}
                            {
                                this.state.numbersTried.map((number) => {
                                    return (
                                        number.name
                                        ? <li key={number.key}>{number.name}</li>
                                        : null
                                    )
                                })
                            }
                        </ul>
                    </aside>
                </div>

                {/* button to change page to NumberLand */}
                <button onClick={this.props.changePage} className="changePage">Go to Numbers Game</button>
            </div>
        );
    }
}

export default Factland;