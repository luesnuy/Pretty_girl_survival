var nicknameinput = document.getElementById("nickname");

nicknameinput.addEventListener("input", function () {
    // 입력 필드의 현재 값 가져오기
    var value = nicknameinput.value;
    console.log(value);

    // 값을 "title" 키로 localStorage에 저장합니다.
    localStorage.setItem("nickname", value);
});