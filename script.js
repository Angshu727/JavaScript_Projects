const calculateTip = () => {
    let billAmount = document.getElementById("billAmount").value;
    let tipPercentage = document.getElementById("tipPercentage").value;

    billAmount=parseFloat(billAmount);
    tipPercentage=parseFloat(tipPercentage);

    if(isNaN(billAmount)||billAmount<0){
        document.getElementById("billAmount").value="";
        alert("Enter valid input");
        return;
    }
    if(isNaN(tipPercentage) || tipPercentage<0){
        document.getElementById("tipPercentage").value="";
        alert("Enter valid input");
        return;
    }

    let tipAmount = billAmount * (tipPercentage/100);
    let totalAmount = billAmount + tipAmount;

    document.getElementById("tipAmount").innerText=tipAmount.toFixed(2);
    document.getElementById("totalAmount").innerText=totalAmount.toFixed(2);
    

}
document.getElementById("calculateBtn").addEventListener("click",calculateTip);
