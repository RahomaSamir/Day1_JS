function getName(){
    let name;
    while(true){
        name = prompt("Please enter your name:");
        // make sure not empty& not number
        if (name && isNaN(name.trim())){ 
            break;
        } else {
            alert("Please enter a valid name");
        }
    }
    return name;
}


function getBirthYear(){
    let birthyear;
    while(true){
        birthyear  = prompt("please enter bith year (must be less than 2010)");
        birthyear = parseInt(birthyear); 
        if(!isNaN(birthyear) && birthyear < 2010  ){
            break;
        }else{
            alert("please enter valid bith year (must be less than 2010) ")
        } 
    }

    return birthyear;
}

function calculateAge(birthyear){
    let currentyear = new Date().getFullYear(); //return current year
    return currentyear - birthyear
}

let name = getName();
let birthYear = getBirthYear();
let age = calculateAge(birthYear);

document.write(`Name: ${name}<br>`);
document.write(`Birth year: ${birthYear}<br>`);
document.write(`Age: ${age}`);