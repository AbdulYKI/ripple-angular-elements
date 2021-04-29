const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = [
    "./dist/test/runtime.js",
    "./dist/test/polyfills.js",
    "./dist/test/main.js",
  ];

  await fs.ensureDir("elements");

  await concat(files, "elements/ripple.js");

  await fs.copyFile("./dist/test/styles.css", "elements/style.css");
  console.info("Elements created successfully!");
})();
