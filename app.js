// A1
function findOppositeNumber(n, inputNumber) {
    if (n < 4 || n % 2 != 0 || n >20) {
        return
    } else
    if ((inputNumber + (n/2)) > (n-1)) {
        return inputNumber - (n/2)
    } else {
    return inputNumber + (n/2); }
}

let outputNumber1 = findOppositeNumber(10,2)
let outputNumber2 = findOppositeNumber(10,6)

console.log(outputNumber1);
console.log(outputNumber2);

// A2
// let aee = "abc"
// let a2 = aee.split("");
// console.log(a2);
// function merge2String(s1, s2) {
//     let arr1 = s1.split("")
//     let arr2 = s2.split("")
//     let mergeString ;
//     for (var i =1 ; i < arr1.length; i++) {
        
//     }
// }
let fm = document.getElementById('val');
function luckyNumber(){
    fm.addEventListener("submit", function(e) {
        e.preventDefault();
        if (fm.input.value.trim() === "") {
            alert('Bạn đã nhập sai!')
            return;
        }
        let luckynum = math.random()*10;
        if (parseInt(fm.input.value) == parseInt(luckynum)) {
            alert('Chúc mừng bạn trúng thưởng!')
        } else {
            alert('Chúc may mắn lần sau!')
        }
    })
};