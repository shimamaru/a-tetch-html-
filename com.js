const fs = require("fs");
const path = require("path");

// Read file content
function readContent(filePath) {
  return fs.readFileSync(path.join(__dirname, filePath), "utf8");
}

// Read header, body, and footer
const headerHtml = readContent("./components/header/index.html");
const body = readContent("./index.html");
const footerHtml = readContent("./components/footer/index.html");

// Combine all parts
const html = body
  .replace("<head>", `<head>\n<style>\n${headerCss}\n${footerCss}\n</style>`)
  .replace("<body>", `<body>\n${headerHtml}`)
  .replace("</body>", `${footerHtml}\n</body>`);

// Write back to index.html
fs.writeFileSync(path.join(__dirname, "/index.html"), html);
