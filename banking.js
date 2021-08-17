// BANKING PAGE
// function inputId(input) {
//     const inputValue = document.getElementById(input);
//     const userInput = parseFloat(inputValue);
//     depositValue.value = '';
//     return userInput;
// }
// function totalUpdate(input, id) {
//     const depositInput = document.getElementById(input);
//     const userInput = parseFloat(depositInput.innerText);
//     const newTotalDeposit = userInput + id;
//     return newTotalDeposit;
// }
document.getElementById('depositButton').addEventListener('click', function () {
    // console.log('clicked!!');
    const depositValue = document.getElementById('depositValue');
    const userDeposit = parseFloat(depositValue.value);
    // const userDeposit = inputId('depositValue');
    // totalUpdate('depositInput', userDeposit);
    const depositInput = document.getElementById('depositInput');
    const userInput = parseFloat(depositInput.innerText);
    const newTotalDeposit = parseFloat(userInput + userDeposit);
    depositInput.innerText = newTotalDeposit;

    const balance = document.getElementById('balanceSection');
    const newBalance = parseFloat(balance.innerText);
    const newTotalBalance = parseFloat(newBalance + userDeposit);
    balance.innerText = newTotalBalance;
    depositValue.value = '';
})

document.getElementById('withdrawButton').addEventListener('click', function () {
    const withdrawValue = document.getElementById('withdrawValue');
    const userWithdraw = parseFloat(withdrawValue.value);
    const withdrawSection = document.getElementById('withdrawSection');
    const userWithdrawInput = parseFloat(withdrawSection.innerText);
    const newTotalWithdraw = parseFloat(userWithdraw + userWithdrawInput);
    withdrawSection.innerText = newTotalWithdraw;

    // updated balance
    const updatedBalance = document.getElementById('balanceSection');
    const newUpdatedBalance = parseFloat(updatedBalance.innerText);
    const newTotalUpdatedBalance = parseFloat(newUpdatedBalance - userWithdraw);
    updatedBalance.innerText = newTotalUpdatedBalance;

    withdrawValue.value = '';
})
