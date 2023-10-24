console.log('content.js loaded');
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

    inputField.focus();
    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            chrome.runtime.sendMessage({askLayer: inputField.value})
            console.log('askLayer message sent');
            overlay.remove();
        }
    })
}

function toggleOverlay() {
    const overlay = document.getElementById('extension-overlay');
    if (overlay) {
        console.log('overlay exists, removing');
        overlay.remove();
    } else {
        console.log('overlay does not exist, creating');
        createOverlay();
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.command === 'toggleOverlay') {
        console.log('toggleOverlay message received')
        toggleOverlay();
    }
});