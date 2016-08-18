var minute      = 1000 * 60;
var defaultRate = 10;
var refreshRate;
var interval;

function removePrevious() {
  $('.sound.playing').closest('.soundList__item').prevAll().remove();
  $(window).scrollTop(0);
}

function setRefreshRate(rate) {
  refreshRate = rate * minute;
  interval    = setInterval(removePrevious, refreshRate);
}
  
setRefreshRate(defaultRate);

chrome.runtime.onMessage.addListener(function(request, _, sendResponse) {
  switch(request.action) {
    case 'removePrevious':
      removePrevious();
      sendResponse({ status: "success" });
      break;
    case 'setRate':
      setRefreshRate(request.newRate);
      sendResponse({ status: "success" });
      break;
    case 'getRate':
      sendResponse({ rate: refreshRate });
      break;
    default:
      sendResponse({ status: "no such request" });
      break;
  }
});
