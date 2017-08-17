import { PostService } from './../../../servicios/post.service';
import { IPost } from './../../../interface/post.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tablaedit',
  templateUrl: './tablaedit.component.html',
  styleUrls: ['./tablaedit.component.css']
})
export class TablaeditComponent implements OnInit {

  post: IPost;
  action: string;

  texto: String = 'Texto';
  fecha: Date = new Date();

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.url.subscribe( ( url: any) => {
      this.action = ( url.length > 1 ? url[1].path : 'add');
      if ( this.action === 'add') {
          console.log('add');
      }else{
        this.route.params.subscribe( (params: { id: number}) => {
          let id: number = params.id;
          // console.log('valor id');
          // console.log(id);
          this.onCargaDetalle(id);

        }
       )
      }
    });

  }

  onCargaDetalle(id: number ): void {
      console.log('onCargaDetalle');
      console.log(id);
      this.postService.getPOSTId(id).subscribe(
          data => {
            this.post = data;
          },
          error => {
            console.log('error');
          }
        );

  }

  OnBack(): void {
    window.history.back();
  }

}
