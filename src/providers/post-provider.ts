import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostProvider {

	server: string = "http://localhost/sportapp/server_api/"; // default

	// if you test in real device "http://localhost" change use the your IP	
	// server: string = "http://192.199.122.100/IONIC4_CRUD_LOGINREGIS_PHP_MYSQL/server_api/"; 

	// server: string = "https://sportappfyp.000webhostapp.com/server_api/library/config.php"; // comp ip address
	//server: string = "http://100.96.56.22/sportapp/server_api/"; // phone ip address

	constructor(public http : Http) {

	}

	postData(body, file){
		let type = "application/json; charset=UTF-8";
		let headers = new Headers({ 'Content-Type': type });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.server + file, JSON.stringify(body), options)
		.map(res => res.json());
	}
}