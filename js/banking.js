document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);


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
});

// handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = parseFloat(withdrawInput.value);

    console.log(withdrawInputText)

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = parseFloat(withdrawTotal.innerText);

    withdrawTotal.innerText = withdrawTotalText + withdrawInputText;


    // update balance total after withdraw
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalbalanceAmount = parseFloat(totalBalanceText);
    totalBalance.innerText = totalbalanceAmount - withdrawInputText;


    //clear withdraw input field
    withdrawInput.value = "";
})