// function challenge1(){
//     if(document.getElementById("subscribe").checked===true){
//         console.log("this is checked");
//     }
//     document.querySelector("#emailDiv").style.display="initial";
//     document.querySelector("#emailDiv").style.display="invisible";
// }

// /*When the box is checked the “Billing Address” shows up in the “Home Address” field 
// When the box is checked you can’t edit the “Home Address” field
// Fix the Accessibility Error on the page
// */

// function challenge2(){
//     let bill = document.querySelector("#bill");
//     let home = document.querySelector("#home");
//     console.log("home value is: " + home.value);
//     console.log("home value is: " + bill.value);

//     if (element.checked){
//         home.value = bill.value
//     }
// }

let check = document.querySelector("#subscribe");
check.addEventListener("click", function(){
    if (check.checked){
        document.querySelector("#emailDiv").style.display="block";
    } else {
        document.querySelector("#emailDiv").style.display="none";
    }
});

// COLOR OF THE DAY: Tangerine