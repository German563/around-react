import {apiKeys} from './utils.js';

class Api{

    constructor({address, token}){
        this._address = address;
        this._token = token;
    }
    getProfileData(){
        return fetch(`${this._address}/users/me`, {
            headers: {
                authorization: this._token
            }
        })    
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(`Error: ${response.status}`);
            })
    }
    getInitialCards(){
        return fetch(`${this._address}/cards`, {
            headers: {
                authorization: this._token
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(`Error: ${response.status}`);
            })
    }
    
}
const api = new Api(apiKeys);
export default api