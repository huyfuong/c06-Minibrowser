// Lấy các button group
let result = document.getElementById("result");
let btnGroups = document.getElementsByClassName("btn-group");
let btnWindows = btnGroups[0].children;
let btnScreens = btnGroups[1].children;
let btnLocations = btnGroups[2].children;
let btnHistories = btnGroups[3].children;
let btnNavigators = btnGroups[4].children;
let btnTimings = btnGroups[5].children;

// Thử nghiệm các hàm xử lý window
// ========================================================================

// width x height
btnWindows[0].addEventListener("click", function () {
  // code here...
  result.innerHTML = "w x h cua window = " + window.innerWidth + " x " + window.innerHeight;
});


// open
btnWindows[1].addEventListener("click", function () {
  let width = window.prompt("Nhập chiều ngang của cửa sổ.");
  let height = window.prompt("Nhập chiều cao của cửa sổ.");
  myWindow = window.open(
    "",
    "New Window",
    "width=" + width + "height=" + height
  );
  myWindow.document.write("Kmin Academy");
});

// close
btnWindows[2].addEventListener("click", function () {
  // code here...
  myWindow.close();
});

// move to
btnWindows[3].addEventListener("click", function () {
  // code here...
  myWindow.moveTo(500, 100);
});

// resize to
btnWindows[4].addEventListener("click", function () {
  // code here...
  myWindow.resizeTo(500, 500)
});

// Thử nghiệm các hàm xử lý screen
// ========================================================================

// width x height
btnScreens[0].addEventListener("click", function () {
  // code here...
  result.innerHTML = "width x height = " + screen.width + " x " + screen.height;
});

// availWidth x availHeight
btnScreens[1].addEventListener("click", function () {
  // code here...
  result.innerHTML = "availWidth x availHeight = " + screen.availWidth + " x " + screen.availHeight;
});

// colorDepth
btnScreens[2].addEventListener("click", function () {
  // code here...
  result.innerHTML = "Color depth = " + screen.colorDepth;
});

// Thử nghiệm các hàm xử lý location
// ========================================================================

// href
btnLocations[0].addEventListener("click", function () {
  // code here...
  result.innerHTML = "href = " + location.href;
});

// hostname
btnLocations[1].addEventListener("click", function () {
  // code here...
  result.innerHTML = "hostname = " +  location.hostname;
});

// pathname
btnLocations[2].addEventListener("click", function () {
  // code here...
  result.innerHTML = "pathname = " + location.pathname;
});

// protocal
btnLocations[3].addEventListener("click", function () {
  // code here...
  result.innerHTML = "protocal = " + location.protocol;
});

// port
btnLocations[4].addEventListener("click", function () {
  // code here...
  result.innerHTML = "port = " + location.port;
});

// Thử nghiệm các hàm xử lý history
// ========================================================================

// back
btnHistories[0].addEventListener("click", function () {
  // code here...
  history.back();
});

// forward
btnHistories[1].addEventListener("click", function () {
  // code here...
  history.forward();
});

// Thử nghiệm các hàm xử lý navigator
// ========================================================================

// language
btnNavigators[0].addEventListener("click", function () {
  // code here...
  result.innerHTML = "language = " + navigator.language;
});

// onLine
btnNavigators[1].addEventListener("click", function () {
  // code here...
  result.innerHTML = "onLine = " + navigator.onLine;
});

// cookieEnabled
btnNavigators[2].addEventListener("click", function () {
  // code here...
  result.innerHTML = "cookieEnabled = " + navigator.cookieEnabled;
});

// Thử nghiệm các hàm xử lý Timing
// ========================================================================

let timeoutId;
btnTimings[0].addEventListener("click", function () {
  // code here...
  let soGiay = Number(prompt("Nhập vào số giây chờ"));
  time = window.setTimeout(soGiay)
});
btnTimings[1].addEventListener("click", function () {
  // code here...
  window.clearTimeout(result.innerHTML = "Đã hết thời gian")
});

let intervalId;
btnTimings[2].addEventListener("click", function () {
  // code here...
});
btnTimings[3].addEventListener("click", function () {
  // code here...
});
