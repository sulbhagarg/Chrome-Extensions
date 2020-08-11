window.something = {}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    something[request.url] = request.count
})

chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.create({url: 'popup.html'})
})