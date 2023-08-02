console.log(add(10, 20));

function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return;
}

const printInfo = function () { //함수의 이름이 printInfo가 된다.
    console.log("정보 출력");
};

console.log(typeof(printInfo));

function callback(fx) {
    console.log("콜백 함수");
    fx();
}

callback(printInfo);

// 익명 함수
const fx1 = function (a) {
    console.log("a: " + a);
}

fx1(10);

// 화살표 함수(람다)
const fx2 = (b) => {
    console.log("b: " + b);
}

fx2(20);