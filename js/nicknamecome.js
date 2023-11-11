var nicknamecome = document.getElementById("nickname2");

var nickname = localStorage.getItem("nickname");
if (nickname) {
    nicknamecome.textContent = nickname;
} else {
    nicknamecome.textContent = "입력되지 않음"; // "title" 키에 저장된 값이 없을 때 기본값 설정
}