document.addEventListener('DOMContentLoaded', function(){
    const bg = chrome.extension.getBackgroundPage()
    Object.keys(bg.something).forEach(function(url){
        const div = document.createElement('div')
        div.textContent = `${url}: ${bg.something[url]}`
        document.body.appendChild(div);
    })
}, false)
