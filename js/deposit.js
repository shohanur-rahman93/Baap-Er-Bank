// step1
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step2
    const depositFiled = document.getElementById('deposit-field');
    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step3
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 4
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    // step 5
   const balanceTotalELement = document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalELement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step 6

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalELement.innerText = currentBalanceTotal;
    // step 7
    depositFiled.value = '';
})