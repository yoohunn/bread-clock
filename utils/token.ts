import Cookies from 'js-cookie';

export const ACCESS_TOKEN = 'access-token';
class TokenStorage {
  get access() {
    return Cookies.get(ACCESS_TOKEN);
  }
  setAccess(token: string) {
    return Cookies.set(ACCESS_TOKEN, token);
  }
  remove() {
    Cookies.remove(ACCESS_TOKEN);
  }
}
export const tokenStorage = new TokenStorage();
