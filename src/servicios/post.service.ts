

// import { Injectable } from '@angular/core';

// import { Http, Response, Headers, RequestOptions } from '@angular/http';
// // import { Http } from 
// import { Observable } from 'rxjs/Rx';

// // Import RxJs required methods
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import { Comment } from '../model/comment';
import {Observable} from 'rxjs/Rx';

import { IPost } from './../interface/post.interface';

@Injectable()
export class PostService {

    private url = 'https://jsonplaceholder.typicode.com';

    constructor (private http: Http) {}
    // constructor(
    //     private http: Http
    // ) {}
    // constructor( private http: Http ) {    }

    // getPOST(): Observable<IPost[]> {
    //     // console.log('Hola');
    //     return this.http.get(this.url)
    //      .map((res: Response) => res.json())
    //      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    // }

}