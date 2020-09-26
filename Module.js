const StopOfDayLoss = 50;
const StopOfDayProfit = 150;
const TurnOverOfDay = 50;
let Result;
let LuckyDay = 0;
let UnluckyDay = 0;
class GamblerSimulationMain {

    stopOfDay = () => {
        var StartingStack = 100;
        while (StartingStack != 50 && StartingStack != 150) {
            var random = (Math.floor(Math.random() * 2)) + 1;
            switch (random) {
                case 1:
                    StartingStack--;
                    break;
                case 2:
                    StartingStack++;
                    break;
            }
        }
        return StartingStack;
    }

    getDaysInfo = (days) => {
        do {
            let LuckyUnluckyDayAmount = 0;
            let Day = 1;
            var array = new Array(days);
            var TotalProfit = 0;
            var TotalLoss = 0;
            while (Day <= days) {
                Result = this.stopOfDay();
                switch (Result) {
                    case StopOfDayLoss:
                        console.log("DAY " + Day + " HE LOST $" + TurnOverOfDay);
                        TotalLoss = TotalLoss + TurnOverOfDay;
                        LuckyUnluckyDayAmount = LuckyUnluckyDayAmount - TurnOverOfDay;
                        array[Day - 1] = LuckyUnluckyDayAmount;
                        break;

                    case StopOfDayProfit:
                        console.log("DAY " + Day + " HE WON $" + TurnOverOfDay);
                        TotalProfit = TotalProfit + TurnOverOfDay;
                        LuckyUnluckyDayAmount = LuckyUnluckyDayAmount + TurnOverOfDay;
                        array[Day - 1] = LuckyUnluckyDayAmount;
                        break;
                }
                Day++;
            }

            if (TotalProfit >= TotalLoss) {
                console.log("OVERALL WON IN " + days + " DAYS IS $" + (TotalProfit - TotalLoss));
                console.log();
            }
            else {
                console.log("OVERALL LOST IN " + days + " DAYS IS $" + (TotalLoss - TotalProfit))
                console.log();
            }
        } while (TotalProfit > TotalLoss)
        return array;
    }

    getLuckyUnluckyDay(days) {
        let array = this.getDaysInfo(days);
        let max = array[0];
        let min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
                LuckyDay = i + 1;
            }
            if (min > array[i]) {
                min = array[i];
                UnluckyDay = i + 1;
            }
        }
        console.log("LUCKYEST DAY IS DAY " + LuckyDay + " HE WAS IN $" + max);
        console.log("UNLUCKYEST DAY IS DAY " + UnluckyDay + " HE WAS IN $" + min);
      // console.log("----------------------------------------------")
    }
}
module.exports = new GamblerSimulationMain();