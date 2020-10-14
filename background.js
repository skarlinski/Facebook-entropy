// chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
// 	alert('background');
// 	chrome.runtime.sendMessage(tabs[0].id, function(response){
// 		console.log(response);
// 	});
// })
chrome.browserAction.onClicked.addListener(function(activeTab) {
    if(activeTab.url && activeTab.url.indexOf('facebook.com') > -1) {
        chrome.tabs.executeScript(null, {file: "liker.js"});
    }
});