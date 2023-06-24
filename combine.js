const fs = require("fs");
const path = require("path");

// Read file content
function readContent(filePath) {
  return fs.readFileSync(path.join(__dirname, filePath), "utf8");
}

// Read header, body, and footer
const header = readContent("./components/header.html");
const body = readContent("/index.html");
const footer = readContent("./components/footer.html");

// Combine all parts
const html = body
  .replace("<body>", `<body>\n${header}`)
  .replace("</body>", `${footer}\n</body>`);

// Write back to index.html
fs.writeFileSync(path.join(__dirname, "/index.html"), html);
