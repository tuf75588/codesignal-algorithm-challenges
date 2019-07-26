/* When a candle finishes burning it leaves a leftover. makeNew leftovers can be combined to make a new candle, which, when burning down, will in turn leave another leftover.

You have candlesNumber candles in your possession. What's the total number of candles you can burn, assuming that you create new candles as soon as you have enough leftovers? */

function candles(candlesNumber, makeNew) {
  let burned = 0;
  while (candlesNumber >= makeNew) {
    const newCandles = Math.floor(candlesNumber / makeNew);
    const candlesBurnedThisRound = newCandles * makeNew;
    console.log({ newCandles });
    burned += candlesBurnedThisRound;
    candlesNumber -= candlesBurnedThisRound;
    candlesNumber += newCandles;
    //0 = 0 + 2 * 2
  }
  return burned + candlesNumber;
}

console.log(candles(5, 2));
