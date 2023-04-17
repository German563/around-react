import {apiKeys} from './utils.js';

class Api {

    constructor({address, token}) {
        this._address = address;
        this._token = token;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
    }

    _request(url, options) {
        return fetch(url, options).then(this._checkResponse);
    }

    getProfileData() {
        return this._request(`${this._address}/users/me`, {
            headers: {
                authorization: this._token
            }
        });
    }

    getInitialCards() {
        return this._request(`${this._address}/cards`, {
            headers: {
                authorization: this._token
            }
        });
    }
}

const api = new Api(apiKeys);
export default api;