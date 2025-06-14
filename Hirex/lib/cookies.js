// lib/cookies.js
export function getCookie(name) {
  const value = `; ${document.cookie}`; // prefix to ease parsing
  const parts = value.split(`; ${name}=`); // split on “; name=”
  if (parts.length === 2) {
    return parts.pop().split(";").shift(); // return the cookie value
  }
  return null;
}
