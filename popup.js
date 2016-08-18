var chr = chrome.tabs;
var minute = 1000 * 60;

document.addEventListener('DOMContentLoaded', function() {

  chr.getSelected(null, function(tab) {
    chr.sendMessage(tab.id, { action: "getRate" }, function(response) {
      document.getElementById('rate').value = response.rate / minute;
    });
  });

  document.getElementById('clear').addEventListener('click', function() {
    chr.getSelected(null, function(tab) {
      chr.sendMessage(tab.id, { action: "removePrevious" });
    });
  }, false);

  document.getElementById('setRate').addEventListener('click', function() {
    chr.getSelected(null, function(tab) {
      chr.sendMessage(tab.id, { 
        action: "setRate",
        newRate: document.getElementById('rate').value
      });
    });
  }, false);
  
}, false);
