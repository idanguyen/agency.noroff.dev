import { Store } from '../../storage/storage.js';
/**
 * I removed the use of the Store class from the logout function because the token can now be stored in either local storage or session storage.
 * Joakim Tveter - joakimtveter
 */

/**
 * Removes token, profile and role from local storage or session storage.
 * It leaves the email in the local storage for prefilling of the login form.
 * @return {void}
 */

export const logout = function () {
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('profile');
  localStorage.removeItem('profile');
  sessionStorage.removeItem('role');
  localStorage.removeItem('role');

  window.location.replace('/');
};
