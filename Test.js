class Test{
     add(a,b) {
        return a + b;
    }
    mul(a,b){
        var c = a*b;
        return c;
    }

    bet(){
       var Bet = 1;
 var Stake = 10;
 console.log(Bet+Stake);
    }
    sub(){
      var   result = this.mul(10,2);
        return result -10;
    }
}

module.exports = new Test();