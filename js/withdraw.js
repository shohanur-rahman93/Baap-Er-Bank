// step 1
document.getElementById('btn-withdraw').addEventListener('click', function() {
    console.log('Withdraw button clicked');
  
    // step 2
    const withdrawField = document.getElementById('withdraw-filed');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);

      // step 6
      withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }
  
    // step 3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  
  
  
    // step 5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  

  

if(newWithdrawAmount>previousBalanceTotal){
    alert('baap er bank e eto taka nai');
    return ;

}

  // step 4
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;


    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
  
  });
  