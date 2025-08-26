import { useState } from 'react';

const AnimateText = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState(text);
    const [animating, setAnimating] = useState(false);

    const handleMouseEnter = async () => {
        if (animating) return;
        setAnimating(true);

        const originalChars = text.split('');
        const updatedChars = [...originalChars];

        // Start from second character
        for (let i = 1; i < originalChars.length; i++) {
            const targetChar = originalChars[i];
            const isUpper = targetChar === targetChar.toUpperCase();
            const targetCode = targetChar.toLowerCase().charCodeAt(0);

            let currentCode = 'a'.charCodeAt(0);

            while (currentCode <= targetCode) {
                updatedChars[i] = isUpper
                    ? String.fromCharCode(currentCode).toUpperCase()
                    : String.fromCharCode(currentCode);

                setDisplayText(updatedChars.join(''));
                await new Promise((r) => setTimeout(r, 8));
                currentCode++;
            }
        }

        setDisplayText(originalChars.join(''));
        setAnimating(false);
    };

    return (
        <span className="cursor-pointer" onMouseEnter={handleMouseEnter}>
            {displayText}
        </span>
    );
};

export default AnimateText;
