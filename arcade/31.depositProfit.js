/* You have deposited a specific amount of money into your bank account.
Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits,
find out how long it would take for your balance to pass a specific threshold. */

function depositProfit(deposit, rate, threshold) {
  let years = 0;
  let increase = rate / 100;
  while (deposit < threshold) {
    deposit += deposit * increase;
    years++;
  }
  return years;
}

console.log(depositProfit(100, 20, 170));
