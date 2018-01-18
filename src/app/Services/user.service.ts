import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import "rxjs/add/operator/map"; /*Nos servira para recibir nuestras peticiones Ajax*/
import {Observable} from 'rxjs/Observable';
/*Importación para la carga del objeto global*/
import {GLOBAL} from './global';

@Injectable()

export class UserService {

	public url: string;
	public identity;
	public token;

	constructor(private _http:Http){
		this.url = GLOBAL.url;
	}

	signup(user_to_login){

		let json = JSON.stringify(user_to_login);
		let params = "json="+json;
		let headers = new Headers({
			'Content-type': 'application/x-www-form-urlencoded'
		});

		return this._http.post(this.url+'/login',
		 params, {headers:headers}).map(res => res.json());

	}
	/*Metodo para sacar la información del localstorage*/
	getIdentity(){

		let identity = JSON.parse(localStorage.getItem('identity'));

		if(identity != "undefined"){

			this.identity = identity;

		}else {
			this.identity = null;
		}

		return this.identity;
	}

	getToken(){

		let token = JSON.parse(localStorage.getItem('token'));

		if(token != "undefined"){

			this.token = token;

		}else {
			this.token = null;
		}

		return this.token;
	}

	register(user){

		let json = JSON.stringify(user);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'/user/new',params,{headers:headers}).map(res => res.json());
	}
}