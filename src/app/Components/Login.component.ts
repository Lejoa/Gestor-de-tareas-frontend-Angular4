import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
	selector:'login',
	templateUrl: '../Views/Login.html',
	/*Si inlcuimos el servicio dentro del  provider, vamos
	a tener disponible el objeto del servicio sin necesidad 
	de estarlo instanciando*/
	providers: [UserService]
})
export class LoginComponent implements OnInit{

	public title: string;
	public user;
	public identity;
	public token;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService:UserService

		){

		this.title = 'Identificate';
		this.user = {

			"email":"",
			"password":"",
			/*Al tener la varaible true, nos devuelve
			la información del usuario en "limpio"*/
			"hash": "true"
		};
	}

	ngOnInit(){
		console.log('El componente login ha sido cargado');
		/*console.log(JSON.parse(localStorage.getItem('identity')));*/
		this.logout();
		this.redirectIfIdentity();
	}

	onSubmit(){
		console.log(this.user);
		this._userService.signup(this.user).subscribe(
			response => {
				 this.identity = response;

				 if(this.identity.length <=1 ){
				 	console.log('Error en el servidor');
				 }{
				 	if(!this.identity.status){
				 		
				 		/*Se guarda la información en unas variables del localstorage
				 			que persisten en toda la aplicación web(sus componentes)
				 		*/
				 		/*En el localstorage solo se puede guardar Strings*/
				 		localStorage.setItem('identity',JSON.stringify(this.identity));
				 	
				 		/*Obtenemos el token*/
				 		this.user.hash = null;
				 		this._userService.signup(this.user).subscribe(
						response => {
				 		this.token = response;

				 		if(this.identity.length <=1 ){
				 			console.log('Error en el servidor');
				 			}{
				 			if(!this.identity.status){
				 			/*En el localstorage solo se puede guardar Strings*/
				 			localStorage.setItem('token',JSON.stringify(this.token));
				 			window.location.href = "/";
				 					}
				 				}
							},
							error => {
							console.log(<any>error);
							}
						);
				 	}
				 }
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	logout(){
		this._route.params.forEach((params: Params) => {
			let logout = +params['id']; 
			
			if(logout == 1){
				localStorage.removeItem('identity');
				localStorage.removeItem('token');

				this.identity = null;
				this.token = null;

				window.location.href = '/login';
			}

		});
	}

	redirectIfIdentity(){
		let identity = this._userService.getIdentity();

		if(identity != null && identity.sub){
			this._router.navigate(["/"]);
		}
	}
}