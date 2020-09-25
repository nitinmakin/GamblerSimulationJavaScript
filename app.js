class Main {
    mainMethod() {
        console.log("WELCOME TO GAMBLING SIMULATION");
        const data = require('./Module');
        data.getDaysInfo(10);
    }
}
var object = new Main();
object.mainMethod()