import { PostService } from './../../../servicios/post.service';
import { IPost } from './../../../interface/post.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablaedit',
  templateUrl: './tablaedit.component.html',
  styleUrls: ['./tablaedit.component.css']
})
export class TablaeditComponent implements OnInit {

  posts: IPost;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.onCargaDetalle(20);
  }

  onCargaDetalle(id: number ): void {
      this.postService.getPOSTId(id).subscribe(
          data => {
            this.posts = data;
          },
          error => {
            console.log('error');
          }
        );

  }

}
