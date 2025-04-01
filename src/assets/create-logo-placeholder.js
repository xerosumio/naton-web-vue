// This is a simple script to create a placeholder logo
// You can run this with Node.js to generate the logo file
// Or you can manually create/download an image and save it as logo-placeholder.png

const fs = require('fs');
const path = require('path');

// Create a simple SVG logo
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="80" viewBox="0 0 200 80">
  <rect width="200" height="80" fill="#1a202c"/>
  <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">Naton Lab</text>
</svg>`;

// Save the SVG as a file
fs.writeFileSync(path.join(__dirname, 'logo-placeholder.svg'), svg);

console.log('Logo placeholder created at src/assets/logo-placeholder.svg');
console.log('You may want to convert this to PNG or use a real logo image.');
