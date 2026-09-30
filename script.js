document.addEventListener('DOMContentLoaded', () => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        // Subtle terminal typing effect for status lines
        const statusLines = [
            { element: document.querySelector('.typing-1'), text: 'CONNECTION FAILED' },
            { element: document.querySelector('.typing-2'), text: 'RESOURCE NOT FOUND' }
        ];

        statusLines.forEach((line, index) => {
            if (!line.element) return;
            
            // Clear text initially
            line.element.textContent = '';
            
            // Stagger the typing effect
            setTimeout(() => {
                typeText(line.element, line.text, 0);
            }, index * 800 + 500); // 500ms delay before start, 800ms between lines
        });
    }
});

function typeText(element, text, index) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        
        // Randomize typing speed slightly for realism (30ms to 80ms)
        const speed = Math.random() * 50 + 30;
        
        setTimeout(() => {
            typeText(element, text, index + 1);
        }, speed);
    }
}
