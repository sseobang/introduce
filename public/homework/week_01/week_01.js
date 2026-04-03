// 콘솔 출력
console.log("JS 파일 연결 완료!");

const button = document.getElementById("myButton");

button.addEventListener("click", introduceMe);

function introduceMe() {
    console.log("버튼이 클릭되었습니다!");

    let name = document.getElementById("nameInput").value;

    if (name == "") {
        name = "방문자";
    }

    let message = greet(name);

    console.log(message);

    document.querySelector("h1").textContent = message;
    document.getElementById("resultText").textContent = "잘 부탁드립니다💙";
}

function greet(userName) {
    return userName + "님, 환영합니다!";
}