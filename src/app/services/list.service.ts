import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor() { }

  async getPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      return posts;
    } catch (error) {
      console.log({ error: error })
    } finally {
      console.log('Fim da requisição')
    }
  }

  async createPost(postData: any) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });

      const newPost = await response.json();
      return newPost;
    } catch (error) {
      console.log({ error: error })
    } finally {
      console.log('Fim da requisição')
    }
  }

  async updatePost(postData: any, id: any) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify(postData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });

      const newPost = await response.json();
      return newPost;

    } catch (error) {
      console.log({ error: error })
    } finally {
      console.log('Fim da requisição')
    }
  }

  async deletePost(id: any) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });

      const newPost = await response.json();
      newPost.status = 200;
      newPost.message = 'Requisição feita com sucesso';

      return newPost;

    } catch (error) {
      console.log({ error: error })
    } finally {
      console.log('Fim da requisição')
    }
  }


}
