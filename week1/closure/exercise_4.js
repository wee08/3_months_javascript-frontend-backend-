// Create a simple bank account with private balance
function createAccount(initialBalance) {
  // Return object with methods: deposit, withdraw, getBalance
  // Balance should be private and not directly accessible

  let _balance = initialBalance;

  function deposit(amount) {
    _balance += amount;
    return _balance;
  }
  function withdraw(amount) {
    _balance -= amount;
    return _balance;
  }

  function accessBalance() {
    return _balance;
  }

  return { deposit, withdraw, accessBalance };
}

const account = createAccount(100);
console.log(account.deposit(50)); // Balance becomes 150
console.log(account.withdraw(30)); // Balance becomes 120
console.log(account.accessBalance()); // Should output: 120
