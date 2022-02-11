document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);

    //get currunt deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalNumber = parseFloat(depositTotalText);
    depositTotal.innerText = depositTotalNumber + depositAmount;

    // update total balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalbalanceAmount = parseFloat(totalBalanceText);
    totalBalance.innerText = totalbalanceAmount + depositAmount;


    // clear the deposit input field
    depositInput.value = "";
})