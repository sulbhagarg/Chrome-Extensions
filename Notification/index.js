var options = {
    type: "basic",
    title: "My first popup with chrome", 
    message: "This is preety cool", 
    iconUrl: "gmail.png"
};

chrome.notifications.create(options, callback);

function callback() {
    console.log("popup done!");
}