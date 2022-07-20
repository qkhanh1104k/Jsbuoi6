function demoWhile() {
    // ------B1: lấy giá trị từ người dùng nhập vào input
    var value = +document.getElementById("txtNum").value;
    var contentHtml = " ";
    var i = 0;
    while (i <= value) {
      contentHtml += i + " ";
      i++;
    }
    document.getElementById("resultBT1").innerHTML = contentHtml;
  }