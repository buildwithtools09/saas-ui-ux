document.addEventListener('DOMContentLoaded', () => {
    const typingTextElement = document.querySelector('.typing-text');
    const textToType = "This is a smart note...\n\nIt helps you organize your thoughts...\n\nAnd suggests relevant ideas.";
    let charIndex = 0;
    const typingSpeed = 50; // milliseconds per character
    const newLineDelay = 500; // milliseconds for new line

    function type() {
        if (charIndex < textToType.length) {
            let char = textToType.charAt(charIndex);
            if (char === '\n') {
                typingTextElement.innerHTML += '<br>';
                charIndex++;
                setTimeout(type, newLineDelay);
            } else {
                typingTextElement.textContent += char;
                charIndex++;
                setTimeout(type, typingSpeed);
            }
        }
    }

    type();
});