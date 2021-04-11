import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DatastorageService, Post } from '../datastorage.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  constructor(private data:DatastorageService, private router:Router){}
  ngOnInit(){
      this.data.getAllPosts().subscribe((posts)=>{
        this.posts= posts
      })
  }

  addNewPost(){
    this.router.navigate(["NewPost"])
  }

  deletePost(id:number){
    this.data.deletePost(id).subscribe((data=>{
      console.log("works")
      this.ngOnInit()
    }))
  }
}
