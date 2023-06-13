import { Component } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-services-api',
  templateUrl: './services-api.component.html',
  styleUrls: ['./services-api.component.css']
})

export class ServicesApiComponent {

  posts!: any[];

  constructor(private postService: ListService) { }

  ngOnInit() {
    this.getPosts();
  }

  async getPosts() {
    this.posts = await this.postService.getPosts();
  }

  async createNewPost() {

    const postData = {
      title: 'Novo Post',
      body: 'Conteúdo do novo post',
      userId: 1
    };

    const newPost = await this.postService.createPost(postData);
    console.log(newPost);

  }

  async updateNewPost() {

    const postData = {
      title: 'Novo Post',
      body: 'Conteúdo do novo post',
      userId: 1
    };

    const newPost = await this.postService.updatePost(postData, 1);
    console.log(newPost);

  }

  async deleteNewPost() {

    const postData = {
      title: 'Novo Post',
      body: 'Conteúdo do novo post',
      userId: 1
    };

    const newPost = await this.postService.deletePost(1);
    console.log(newPost);

  }

}
