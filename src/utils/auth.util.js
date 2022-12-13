import localStore from './localstore.util';
import {updateHeaders} from '../api-services/request-handler';

export const getToken = () => localStore.get_data('token');

export const setToken = token => localStore.store_data('token', token);

export const getUser = () => localStore.get_data('user');

export const saveUser = user => localStore.store_data('user', user);

export const loginKey = () => localStore.store_data('isLogin', true);

export const FavoutriteDoctors = data =>
  localStore.store_data('favourite_doctors', data);

export const setStaticData = data => localStore.store_data('static', data);

export const languageKey = data => localStore.store_data('language', data);

export const setCartData = data => localStore.store_data('cart_data', data);

export const setVideoToken = data => localStore.store_data('video_token', data);

export const logout = async () => {
  localStore.remove_all();
  await updateHeaders();
  return true;
};

class Auth {
  constructor() {
    this.user = {};
  }

  async setUserFromLocal() {
    const user = await getToken();
    this.user = user ? user : {};
  }

  // set setUser(user) {
  //   this.user = user;
  // }

  // set loginKey(value) {
  //   this.value = value;
  // }

  get getUser() {
    return this.user;
  }

  async logout() {
    await logout();
    this.user = {};
  }
}

export const authClass = new Auth();
