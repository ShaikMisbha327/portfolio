    const phrases = ["Front-end Developer", "Web Developer","UI UX designer"];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;

    const dynamicTextElement = document.getElementById("dynamic-text");

    function type() {
        if (currentCharIndex < phrases[currentPhraseIndex].length) {
            dynamicTextElement.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(type,100); // Adjust typing speed here (in milliseconds)
        } else {
            setTimeout(deleteText, 1500); // Wait before starting to delete
        }
    }

    function deleteText() {
        if (currentCharIndex > 0) {
            dynamicTextElement.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(deleteText, 50); // Adjust deleting speed here
        } else {
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Cycle through phrases
            setTimeout(type, 500); // Wait before starting to type the next phrase
        }
    }

    // Start the typing effect
    window.onload = function() {
        type();
    };

