console.log('service-worker.js loaded');

chrome.commands.onCommand.addListener((command) => {
    if (command === "open-layer-prompt") {
        console.log('open-layer-prompt received');
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            const activeTab = tabs[0];
            if (activeTab) {
                chrome.tabs.sendMessage(activeTab.id, {command: 'toggleOverlay'});
            }
        });
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.askLayer) {
        console.log('askLayer message received');

    }
})

async function fetchLayer() {
    const response = await fetch('http://localhost:5000/layer');
    const layer = await response.json();
    return layer;
}