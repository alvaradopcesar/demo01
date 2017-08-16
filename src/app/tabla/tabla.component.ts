
import { IPost } from './../../interface/post.interface';
import { PostService } from './../../servicios/post.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  posts: IPost[] = [];

  constructor(
      private postService: PostService
  ) {}

  ngOnInit() {
    this.CargaPost();
  }

  CargaPost(): void {
    this.postService.getPOST().subscribe(
        data => {
          this.posts = data;
        },
        error => {
          console.log('error');
        }
      );
  }


}
