class GamblerSimulationMain {
    StopOfDay() {
        var startingStack = 100;
        var placedBet = 1;
        while (startingStack != 50 && startingStack != 150) {
            var random = Math.random() * 2;
            if (random <= 1) {
                startingStack--;
            }
            else {
                startingStack++;
            }
        }
        return startingStack;
    }
    getDaysInfo(days) {
        var day = 1;
        var totalProfit=0;
        var totalLoss=0;
        while (day <= days) {
            var result = this.StopOfDay();

            if (result == 50) {
                console.log("in day "+day+" he lost 50")
               totalLoss = totalLoss + 50;
            }
            else {
                console.log("in day "+day+" he won 50");
                totalProfit = totalProfit + 50;
            }
           
            day++;
        }
        if(totalProfit >= totalLoss){
            console.log("he won "+(totalProfit-totalLoss)+" in "+days+" days")
        }
        else{
        console.log("he lost "+(totalLoss-totalProfit)+" in "+days+" days")
        }
    }
}
module.exports = new GamblerSimulationMain();