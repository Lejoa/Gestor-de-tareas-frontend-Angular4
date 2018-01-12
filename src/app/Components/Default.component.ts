import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector:'default',
	templateUrl: '../Views/Default.html'
})
export class DefaultComponent implements OnInit{

	public title: string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router

		){

		this.title = 'Homepage';
	}

	ngOnInit(){
		console.log('El componente Default ha sido cargado');
	}
}