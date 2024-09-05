const typewriterLines = [
    "Behold! Inside this box lies a gift so unique,",
    "that no student in history has dared to bestow it upon a teacher.",
    "I kindly ask you to open it with care...",
    "WARNING: once opened, your expectations may never be the same again!",  // Added missing comma
    "                                                              BY:-SUJAY.S.B"
];

let lineIndex = 0;
let charIndex = 0;
const speed = 40;  // Speed for typing each character
const linePause = 500;  // Pause between lines

function typeWriter() {
    if (lineIndex < typewriterLines.length) {
        const currentLine = typewriterLines[lineIndex];

        if (charIndex < currentLine.length) {
            const charSpan = `<span class="rainbow">${currentLine.charAt(charIndex)}</span>`;
            document.getElementById("typewriter-text").innerHTML += charSpan;
            charIndex++;
            setTimeout(typeWriter, speed);
        } else {
            // Move to the next line after a pause
            charIndex = 0;
            lineIndex++;
            document.getElementById("typewriter-text").innerHTML += "<br>";  // Add line break
            setTimeout(typeWriter, linePause);
        }
    }
}

window.onload = function() {
    typeWriter();
};
