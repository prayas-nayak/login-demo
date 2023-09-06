// Function to scroll to the bottom of the div
function scrollToBottom() {
    hero.scrollTop = hero.scrollHeight;
}

// Create a MutationObserver to watch for changes in the div's content
const observer = new MutationObserver(scrollToBottom);

// Configure the observer to watch for child list changes (i.e., new content added)
const observerConfig = { childList: true };

// Start observing the div
observer.observe(hero, observerConfig);