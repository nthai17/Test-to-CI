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

function merge2String(s1, s2) {
    let arr1 = s1.split("")
    let arr2 = s2.split("")
    for (var i =0 ; i < arr1.length; i++) {
        arr1[i] += arr2[i];
    }
    return arr1.join("")
}
console.log(merge2String("abc", "123"));

// B
let fm = document.getElementById('val');
    fm.addEventListener("submit", function(e) {
        e.preventDefault();
        if ((fm.input.value === "") || parseInt(fm.input.value) < 1 || parseInt(fm.input.value) > 10 ){
            alert('Bạn đã nhập sai!')
            return;
        }
        let luckynum = Math.random()*10;
        if (parseInt(fm.input.value) == parseInt(luckynum)) {
            alert('Chúc mừng bạn trúng thưởng! - Số trúng thưởng là:' + parseInt(luckynum))
        } else {
            alert('Chúc may mắn lần sau! - Số trúng thưởng là:' + parseInt(luckynum))
        }
    });