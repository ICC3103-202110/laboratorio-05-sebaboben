

function calculateTip(billAmount,tipPercentage){
    return billAmount * tipPercentage/100;
}

function totalPay(billAmount,tip){
    return (tip + parseInt(billAmount));
}

function update(input1,input2,model){
    const calculatedTip = calculateTip(input1,input2)
    const newBill = totalPay(input1,calculatedTip)
    return {
        ...model,
        billAmount : input1 ,
        tipPercentage : input2,
        tip :  calculatedTip,
        total : newBill
    }
}

module.exports = {update}