import Cookies from 'js-cookie';

export function getCookie(key) {
  if (Cookies.has(key)) {
    return Cookies.get(key);
  }
  return null;
}
export function setCookie(key, value) {
  Cookies.set(key, value);
}
