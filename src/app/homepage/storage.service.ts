import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage'
export interface Item {
  id: number,
  title: string,
  content: string,
  modified: number
}

const ITEMS_KEY = 'ny-items';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }
  addNote(note){
    let notes=[];
    if(localStorage.getItem('Notes')){
      notes=JSON.parse(localStorage.getItem('Notes'));
       notes=[note, ...notes];
    }else{
      notes=[note];
    }
    localStorage.setItem('Notes',JSON.stringify(notes));
  }
 /*  addNewNote(note:Item): Promise<any> {
     return this.storage.get(ITEMS_KEY).then((notes:Item[])=>{
      if(notes){
        notes.push(note)
        return this.storage.set(ITEMS_KEY,notes);
      }else{
        return this.storage.set(ITEMS_KEY,[note]);
      }
     });
  } */

  /* getNote():Promise<Item[]>{
    return this.storage.get(ITEMS_KEY);
  } */

 /*  updateNote(note:Item): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((notes:Item[])=>{
      if(!notes || notes.length===0){
        return null;
      }

      let newNotes:Item[]=[];

      for(let i of notes){
        if(i.id===note.id){
          newNotes.push(note);
        }else{
          newNotes.push(i);
        }
      }

      return this.storage.set(ITEMS_KEY, newNotes);

     });
  } */

 /*  deleteItem(id:number):Promise<Item>{
    return this.storage.get(ITEMS_KEY).then((notes:Item[])=>{
      if(!notes || notes.length===0){
        return null;
      }
      let keep:Item[]=[];
      for(let i of notes){
        if(i.id !==id){
          keep.push(i);
        }
      }

      return this.storage.set(ITEMS_KEY, keep);
    });

  } */
}
