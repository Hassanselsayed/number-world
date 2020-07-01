(this["webpackJsonpnumber-world"]=this["webpackJsonpnumber-world"]||[]).push([[0],{32:function(e,t,a){e.exports=a(74)},37:function(e,t,a){},38:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(29),s=a.n(l),u=(a(37),a(6)),c=a(7),o=a(8),i=a(9),m=(a(38),a(30)),d=a(14),h=a.n(d),p=a(18),b=a.n(p);b.a.initializeApp({apiKey:"AIzaSyDmuSVdR0wnCTRy1nEgcNsMgyEI48P9xaQ",authDomain:"numberlandhassanelsayed.firebaseapp.com",databaseURL:"https://numberlandhassanelsayed.firebaseio.com",projectId:"numberlandhassanelsayed",storageBucket:"numberlandhassanelsayed.appspot.com",messagingSenderId:"1052401100505",appId:"1:1052401100505:web:5287596107ba308a0bc0c8"});var f=b.a,E=a(31),v=a.n(E),g=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({userInput:t.target.value})},e.state={userInput:""},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("main",null,r.a.createElement("form",{action:"",onSubmit:function(t){e.props.chosenNumberHandler(t,e.state.userInput),e.setState({userInput:""})}},r.a.createElement("label",{htmlFor:"numberInput"},r.a.createElement("h3",null,"Please enter a number (1 to 100):",r.a.createElement("span",{className:"sr-only"},"1 to 100"))),r.a.createElement("input",{autoComplete:"off",type:"number",id:"numberInput",min:"1",max:"100",title:"1 to 100",onChange:this.handleChange,value:this.state.userInput,required:!0}),r.a.createElement("button",null,"Submit")),r.a.createElement("p",null,"or"),r.a.createElement("form",{action:"",onSubmit:function(t){return e.props.randomNumberHandler(t)}},r.a.createElement("h3",null,"Generate a number randomly (1 to 100):"),r.a.createElement("button",{id:"randomGenerator"},"Submit")),r.a.createElement("div",{className:"results"},r.a.createElement("h2",null,"Number chosen/generated: ",this.props.usedNumber),r.a.createElement("h2",null,"Fact about that number:"),r.a.createElement("ul",null,""!==this.props.triviaFact?r.a.createElement("li",null,this.props.triviaFact):null)))}}]),a}(n.Component),y=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).numberApi=function(t){h()({url:"https://proxy.hackeryou.com",responseType:"",paramsSerializer:function(e){return v.a.stringify(e,{arrayFormat:"brackets"})},params:{reqUrl:"http://numbersapi.com/".concat(t),xmlToJSON:!1}}).then((function(a){var n=e.state.numbersTried;n.push(t),e.setState({usedNumber:t,triviaFact:a.data,numbersTried:n})})).catch((function(){alert("please slow down")}))},e.chosenNumberHandler=function(t,a){t.preventDefault(),e.numberApi(a),f.database().ref().push(a),document.getElementById("numberInput").focus()},e.randomNumberHandler=function(t){t.preventDefault();var a=Math.floor(100*Math.random()+1);e.numberApi(a),f.database().ref().push(a),document.getElementById("randomGenerator").focus()},e.state={usedNumber:"",triviaFact:"",numbersTried:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var r in a){var l={key:r,name:a[r]};n.push(l),n.length>=11&&n.splice(0,1)}e.setState({numbersTried:n},(function(){}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"FactLand wrapper"},r.a.createElement("h1",null,"Facts generator"),r.a.createElement("div",{className:"gridSystem"},r.a.createElement("aside",{className:"leftAside"},r.a.createElement("h4",null,"Recommended numbers:"),r.a.createElement("ul",null,r.a.createElement("li",null,"7"),r.a.createElement("li",null,"13"),r.a.createElement("li",null,"21"),r.a.createElement("li",null,"34"),r.a.createElement("li",null,"46"),r.a.createElement("li",null,"57"),r.a.createElement("li",null,"64"),r.a.createElement("li",null,"75"),r.a.createElement("li",null,"89"),r.a.createElement("li",null,"98"))),r.a.createElement(g,{chosenNumberHandler:this.chosenNumberHandler,randomNumberHandler:this.randomNumberHandler,usedNumber:this.state.usedNumber,triviaFact:this.state.triviaFact}),r.a.createElement("aside",{className:"rightAside"},r.a.createElement("h4",null,"Numbers tried (last ten):"),r.a.createElement("ul",null,this.state.numbersTried.map((function(e){return e.name?r.a.createElement("li",{key:e.key},e.name):null}))))),r.a.createElement("button",{onClick:this.props.changePage,className:"changePage"},"Go to Numbers Game"))}}]),a}(n.Component),w=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).newtonApi=function(t){h()({url:"https://newton.now.sh/".concat(t),method:"GET",responseType:"json"}).then((function(t){e.setState({expression:"".concat(t.data.operation,":"),question:t.data.expression,correctAnswer:t.data.result})}))},e.submitUserChoice=function(t){t.preventDefault(),e.setState({userAnswer:"",outcome:""}),document.getElementById("userAnswer").focus(),"easy"===e.state.userSelection?e.newtonApi("simplify/2^2+2(2)"):"medium"===e.state.userSelection?e.newtonApi("factor/x^2-1"):e.newtonApi("integrate/x^2+2x")},e.evaluateAnswer=function(t){t.preventDefault(),""!==e.state.userSelection?e.state.userAnswer===e.state.correctAnswer?e.setState({outcome:"Correct answer!"}):e.setState({outcome:"Try again"}):(document.getElementById("difficultyLevel").focus(),e.setState({outcome:"Please select a difficulty level first"})),e.setState({userAnswer:""})},e.getUserChoice=function(t){e.setState({userSelection:t.target.value})},e.handleChange=function(t){e.setState({userAnswer:t.target.value})},e.state={userSelection:"",expression:"",question:"",userAnswer:"",correctAnswer:"",outcome:""},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"NumberLand wrapper"},r.a.createElement("h1",null,"Numbers Game"),r.a.createElement("form",{action:"",onSubmit:this.submitUserChoice},r.a.createElement("h2",null,"Please choose a difficulty level"),r.a.createElement("select",{onChange:this.getUserChoice,name:"difficultyLevel",id:"difficultyLevel",defaultValue:"none"},r.a.createElement("option",{value:"none",disabled:!0},"Choose a difficulty level"),r.a.createElement("option",{value:"easy"},"What is Math?"),r.a.createElement("option",{value:"medium"},"Meh"),r.a.createElement("option",{value:"hard"},"My middle name is Gauss")),r.a.createElement("button",null,"Choose level")),r.a.createElement("form",{action:"",onSubmit:this.evaluateAnswer},r.a.createElement("h2",null,"Solve the following expression (after choosing difficulty)"),r.a.createElement("p",{className:"dynamicContent"},r.a.createElement("span",null,this.state.expression),this.state.question),r.a.createElement("label",{htmlFor:"userAnswer"},"Please enter your answer"),r.a.createElement("input",{autoComplete:"off",type:"text",id:"userAnswer",onChange:this.handleChange,value:this.state.userAnswer,required:!0}),r.a.createElement("button",null,"Submit answer")),r.a.createElement("p",{className:"dynamicContent outcome"},this.state.outcome),r.a.createElement("button",{onClick:this.props.changePage,className:"changePage"},"Go to Facts Generator"))}}]),a}(n.Component),S=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).changePageHandler=function(){e.state.factLand?e.setState({factLand:!1}):e.setState({factLand:!0})},e.state={factLand:!0},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.Helmet,null,r.a.createElement("title",null,"Number World")),this.state.factLand?r.a.createElement(y,{changePage:this.changePageHandler}):r.a.createElement(w,{changePage:this.changePageHandler}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.dbdf58f4.chunk.js.map