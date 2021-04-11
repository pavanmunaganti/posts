import { Router } from '@angular/router';
import { DatastorageService, Post } from './../datastorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private data:DatastorageService, private router:Router) { }

  ngOnInit(): void {
  }

  addPost(newPost: Post){
    this.data.addNewPost(newPost).subscribe((post=>{
      if(post != null){
        this.router.navigate(["Posts"])
      }
    }))
  }
}
