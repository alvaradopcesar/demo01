
import { Http, Response } from '@angular/http';
import { IPost } from './../interface/post.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {

    private url = 'https://jsonplaceholder.typicode.com';

    constructor (private http: Http) {}

    getPOST(): Observable<IPost[]> {
        console.log('Hola');
        return this.http.get(this.url + '/posts')
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    getPOSTId(id: number): Observable<IPost> {
        console.log('getPOSTid');
        return this.http.get(this.url + '/posts/' + id.toString() )
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }

}