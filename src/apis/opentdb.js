export const API_URL = 'https://opentdb.com';

// there are two ways to transform HTML codes (like &copy; instead of the copyright sign, for example) to JSX:
// 1. use the property 'dangerouslySetInnerHTML', pass into it '{{__html: someHTML}}', attach it to the element in which you want the HTML text to appear. The syntax is funky because React wants to prevent you from using this, since it makes a target of XSS attacks.
// 2. use a function like the one below
export const decodeString = function (str) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = str;
  return textArea.value;
};
