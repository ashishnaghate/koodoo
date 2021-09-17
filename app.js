// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

// use recursive function
const accountBalanceHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  },
];

// const accountTypeChecker = (accountBalanceHistory) => {
function accountTypeChecker(accountBalanceHistory) {
  /***
  Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
  whether this array is of type A (variable) or type B (fixed).

  Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.

  Type 🅱 is one where the balance amount changes by the same amount each month.
  ***/

  // Write your logic here  - No pressure 😁 //
  // let result;

  const arrLength = accountBalanceHistory.length;
  let initDiff;
  if (arrLength > 2) {
    console.log(
      'accountBalanceHistory[arrLength - 1].account.balance.amount  : ' +
        accountBalanceHistory[arrLength - 1].account.balance.amount
    );
    console.log(
      'accountBalanceHistory[arrLength - 2].account.balance.amount : ' +
        accountBalanceHistory[arrLength - 2].account.balance.amount
    );
    initDiff =
      accountBalanceHistory[arrLength - 1].account.balance.amount -
      accountBalanceHistory[arrLength - 2].account.balance.amount;
    console.log('initDiff ----- : ' + initDiff);
  } else {
    return 'Insufficint data';
  }

  for (let i = arrLength - 2; i >= 0; i--) {
    let isDiff = checkAmountDiff(
      accountBalanceHistory[i].account.balance.amount,
      accountBalanceHistory[i - 1].account.balance.amount,
      initDiff
    );
    if (isDiff === 'A') {
      return 'A'; // variable amount
    }
    if (i == 1) {
      return 'B'; //fixed amount
    }
  }
}

function checkAmountDiff(oldAmount, newAmount, initDiff) {
  console.log('oldAmount : ' + oldAmount);
  console.log('newAmount : ' + newAmount);
  console.log('initDiff : ' + initDiff);
  let diffAmout = oldAmount - newAmount;
  console.log('diffAmout : ' + diffAmout);
  if (initDiff === diffAmout) {
    return 'B';
  } else {
    return 'A';
  }
}
let result = accountTypeChecker(accountBalanceHistory);
console.log(result);
if (result == 'B') {
  appDiv.innerHTML = `<h1>Account Balance History array is of type "B" (fixed) </h1>`;
} else {
  appDiv.innerHTML = `<h1>Account Balance History array is of type "A" (variable) </h1>`;
}
