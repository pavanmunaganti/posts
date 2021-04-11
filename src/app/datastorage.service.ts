import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

export interface Post{
  id:number
  title:string
  course:string
  postedOn:string
}

@Injectable({
  providedIn: 'root'
})
export class DatastorageService {
  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.apiServer + '/Posts');
  }

  addNewPost(newPost: Post) {
    return this.http.post<Post>(this.apiServer + '/Posts', JSON.stringify(newPost), this.httpOptions)
  }

  deletePost(id:number){
    return this.http.delete<Post>(this.apiServer + '/Posts/' + id, this.httpOptions)
  }
}
