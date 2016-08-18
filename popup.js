var minute = 1000 * 60;

document.addEventListener('DOMContentLoaded', function() {

  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendMessage(tab.id, { action: "getRate" }, function(response) {
      document.getElementById('rate').value = response.rate / minute;
    });
  });

  document.getElementById('clear').addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.sendMessage(tab.id, { action: "removePrevious" }, function(response) {});
    });
  }, false);

  document.getElementById('setRate').addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.sendMessage(tab.id, { 
        action: "setRate",
        newRate: document.getElementById('rate').value
      }, function(response) {});
    });
  }, false);
  
}, false);
