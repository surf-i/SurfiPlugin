chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === "install") {
        chrome.tabs.create({
            url : "https://surfi.netlify.app"
        });
    }
});

