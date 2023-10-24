function createOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.id = 'extension-overlay';
    
    const inputField = document.createElement('input');
    inputField.className = 'input-field';
    inputField.type = 'text';
    inputField.placeholder = 'Type here...';
    
    overlay.appendChild(inputField);
    document.body.appendChild(overlay);
}

function toggleOverlay() {
    const overlay = document.getElementById('extension-overlay');
    if (overlay) {
        overlay.remove();
    } else {
        createOverlay();
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.command === 'toggleOverlay') {
        toggleOverlay();
    }
});