import { marked } from "marked";

const markdownParser = (text) => {
  // const toHTML = text
  //   .replace(/^###### (.*$)/gim, "<h6 class='preview-h6'>$1</h6>") // h3 tag
  //   .replace(/^##### (.*$)/gim, "<h5 class='preview-h5'>$1</h5>") // h3 tag
  //   .replace(/^#### (.*$)/gim, "<h4 class='preview-h4'>$1</h4>") // h3 tag
  //   .replace(/^### (.*$)/gim, "<h3 class='preview-h3'>$1</h3>") // h3 tag
  //   .replace(/^## (.*$)/gim, "<h2 class='preview-h2'>$1</h2>") // h2 tag
  //   .replace(/^# (.*$)/gim, "<h1 class='preview-h1'>$1</h1>") // h1 tag
  //   .replace(/^- (.*$)/gim, "<li class='preview-li'>$1</li>") // li tag
  //   .replace(/^> (.*$)/gim, "<blockquote class='quote'>$1</blockquote>") // blockquote tag
  //   .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>") // bold text
  //   .replace(/\*(.*)\*/gim, "<i>$1</i>") // italic text
  //   .replace(/^`(.*)`/gim, "<code class='inline-code'>$1</code>") // Code
  //   .replace(/(.*$)/gim, "<p>$1</p>");
  const toHTML = marked.parse(text);
  return toHTML.trim(); // using trim method to remove whitespace
};

export default markdownParser;
