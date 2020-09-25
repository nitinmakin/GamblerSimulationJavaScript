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
        var array = new Array(days);
        var luckyUnluckyDayAmount = 0;
        var day = 1;
        var totalProfit = 0;
        var totalLoss = 0;
        while (day <= days) {
            var result = this.StopOfDay();

            if (result == 50) {
                console.log("DAY " + day + " HE LOST $50")
                totalLoss = totalLoss + 50;
                luckyUnluckyDayAmount = luckyUnluckyDayAmount - 50;
                array[day - 1] = luckyUnluckyDayAmount;
            }
            else {
                console.log("DAY " + day + " HE WON $50");
                totalProfit = totalProfit + 50;
                luckyUnluckyDayAmount = luckyUnluckyDayAmount + 50;
                array[day - 1] = luckyUnluckyDayAmount;
            }

            day++;
        }
        if (totalProfit >= totalLoss) {
            console.log("OVERALL WON IN " + days + " DAYS IS $" + (totalProfit - totalLoss));
        }
        else {
            console.log("OVERALL LOST IN " + days + " DAYS IS $" + (totalLoss - totalProfit))
        }
        var max = array[0];
        var min = array[0];
        var luckyDay = 0;
        var unluckyDay = 0;
        for (var i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
                luckyDay = i + 1;
            }
            if (min > array[i]) {
                min = array[i];
                unluckyDay = i + 1;
            }
        }
        console.log("LUCKYEST DAY IS DAY " + luckyDay + " HE WAS IN $" + max);
        console.log("UNLUCKYEST DAY IS DAY " + unluckyDay + " HE WAS IN $" + min);
    }
}
module.exports = new GamblerSimulationMain();