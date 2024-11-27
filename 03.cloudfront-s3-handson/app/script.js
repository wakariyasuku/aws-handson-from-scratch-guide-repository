document.getElementById("submitBtn").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const resultDiv = document.getElementById("result");

    if (name) {
        resultDiv.innerHTML = `Hello ${name} さん<br>ここまでのハンズオンお疲れさまでした！`;
    } else {
        resultDiv.innerHTML = "名前を入力してください";
    }
});
