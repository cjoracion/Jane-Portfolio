// 1. Select the HTML elements
const redSlider = document.getElementById('red-slider');
const greenSlider = document.getElementById('green-slider');
const blueSlider = document.getElementById('blue-slider');
const hexDisplay = document.getElementById('hex-display');
const cssCode = document.getElementById('css-code');
const rootElement = document.documentElement;
const hexCopyBox = document.getElementById('hex-copy-box');
const copyBtn = document.getElementById('copy-btn');

// 2. Create the math function to convert base-10 to base-16
function rgbToHex(r, g, b) {
  // Convert string values to numbers
  r = Number(r);
  g = Number(g);
  b = Number(b);

  // Convert to hex and ensure it is always 2 characters (e.g., '05' instead of '5')
  const redHex = r.toString(16).padStart(2, '0');
  const greenHex = g.toString(16).padStart(2, '0');
  const blueHex = b.toString(16).padStart(2, '0');

  return `#${redHex}${greenHex}${blueHex}`.toUpperCase();
}

// 3. Create the function that runs every time a slider moves
function updateColor() {
  // Get current values from sliders
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;

  // Update CSS variables for the preview box
  rootElement.style.setProperty('--r', r);
  rootElement.style.setProperty('--g', g);
  rootElement.style.setProperty('--b', b);

  // Generate the new Hex code
  const hexValue = rgbToHex(r, g, b);

  // Update the text on the screen
  hexDisplay.textContent = hexValue;
  cssCode.textContent = `background-color: ${hexValue};`;
  hexCopyBox.value = hexValue;
}

// 4. Attach event listeners to trigger the update function
redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

copyBtn.addEventListener('click', function() {
  // Use the modern Clipboard API to copy the text inside the input box
  navigator.clipboard.writeText(hexCopyBox.value).then(function() {
    
    // Bonus: Temporarily change the button text to show it worked!
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    
    // Change it back to "Copy Hex" after 1.5 seconds (1500 milliseconds)
    setTimeout(function() {
      copyBtn.textContent = originalText;
    }, 1500);
    
  });
});