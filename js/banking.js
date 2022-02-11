function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(amount);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    const newTotal = totalFieldId + previousTotal;
    totalElement.innerText = newTotal;
    totalElement.value = '';
    return totalElement.innerText;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

document.getElementById('deposite-button').addEventListener('click', function () {

    //deposite ammont
    const newDepositeAmonut = getInputValue('deposite-input');

    if (newDepositeAmonut > 0) {
        updateTotalField(newDepositeAmonut, 'deposit-total');
        updateBalance(newDepositeAmonut, true);
    }
    else {
        alert('please enter a valid amount');
    }

})
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawAmonut = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmonut > 0) {
        if (withdrawAmonut < currentBalance) {
            updateTotalField(withdrawAmonut, 'withdraw-total');
            updateBalance(withdrawAmonut, false);
        }
        else {
            alert('Your current balance is insufficient');
        }
    }
    else {
        alert('please enter a valid amount');
    }
})
