var minute = 1000 * 60;
var defaultMinutes = 10;
var refreshRate;
var interval;

function removePrevious() {
  $('.sound.playing').closest('.soundList__item').prevAll().remove();
  $(window).scrollTop(0);
}

function setRefreshRate(minutes) {
  refreshRate = minutes * minute;
  interval = setInterval(removePrevious, refreshRate);
}
  
setRefreshRate(defaultMinutes);

chrome.runtime.onMessage.addListener(function(request, _, sendResponse) {
  if (request.action == "removePrevious") {
    removePrevious();
    sendResponse({status: "success"});
  } else if (request.action == "setRate") {
    setRefreshRate(request.newRate)
    sendResponse({status: "success"});
  } else if (request.action == "getRate") {
    sendResponse({rate: refreshRate});
  } else {
    sendResponse({status: "no suuch request"});
  } 
});
