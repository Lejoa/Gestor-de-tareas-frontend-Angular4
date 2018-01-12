import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector:'register',
	templateUrl: '../Views/Register.html'
})
export class RegisterComponent implements OnInit{

	public title: string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router

		){

		this.title = 'Registro';
	}

	ngOnInit(){
		console.log('El componente Registro ha sido cargado');
	}
}