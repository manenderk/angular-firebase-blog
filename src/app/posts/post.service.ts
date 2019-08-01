import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

//import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  postsCollection: AngularFirestoreCollection<Post>  //linked with Post Class
  postDoc: AngularFirestoreDocument<Post>
  //posts: Observable<Post[]>;
  
  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts', ref => ref.orderBy('published', 'desc')); //linked with posts collection from firebase
  }

  getPosts(){
    return this.postsCollection.snapshotChanges().pipe(
      map( actions => {
        return actions.map( a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    )    
  }

  getPostData(id: string){
    this.postDoc = this.afs.doc<Post>('posts/'+id);
    return this.postDoc.valueChanges();
  }

}
