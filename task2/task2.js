
//task 2

function checkTemp() {
   
    let temperature = prompt("Please enter today's temperature:");
    temperature = parseFloat(temperature);
    if (!isNaN(temperature)) {
        let result = temperature >= 30 ? "Hot" : "Cold";
        document.write(result);
    } else {
       
        document.write("Please enter a valid temperature.");
    }
}
checkTemp();












