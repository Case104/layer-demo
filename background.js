chrome.commands.onCommand.addListener((command) => {
    if (command === "_execute_action") {
        chrome.scripting.executeScript({
            func: toggleOverlay
        });
    }
});

function toggleOverlay() {
    chrome.runtime.sendMessage({command: 'toggleOverlay'});
}