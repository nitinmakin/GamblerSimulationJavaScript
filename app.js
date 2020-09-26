class Main {
    mainMethod() {
        console.log()
        console.log("WELCOME TO GAMBLING SIMULATION");
        console.log("==============================")
        const data = require('./Module');
       data.getLuckyUnluckyDay(5);
    }
}
var object = new Main();
object.mainMethod()