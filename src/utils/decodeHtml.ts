function decodeHtml(html: string) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = html;
  return textarea.value;
}

export { decodeHtml };
