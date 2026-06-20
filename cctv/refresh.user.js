// ==UserScript==
// @name         refresh
// @version      1.5.0
// @description  refresh
// @match        https://www.freeclash.top/*
// @run-at       document-end
// ==/UserScript==

(function () {
  function addStyle() {
    for (let i = 0; i < 3; i++) {
      const linkDiv = document.getElementById(`link${i + 1}`);
      if (linkDiv) {
        const currentHour = new Date();
        currentHour.setMinutes(0, 0, 0);
        const currentHourTimestamp = Math.floor(currentHour.getTime() / 1000);
        linkDiv.innerText = linkDiv.innerText + `${currentHourTimestamp}`;
      }
    }
  }//延迟+递归：替代定时器
  addStyle();

})();

