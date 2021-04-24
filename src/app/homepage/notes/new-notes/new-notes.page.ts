import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Platform, ToastController } from '@ionic/angular';
import { Item, StorageService } from '../../storage.service';
import { Notes } from '../new-note.model';

@Component({
  selector: 'app-new-notes',
  templateUrl: './new-notes.page.html',
  styleUrls: ['./new-notes.page.scss'],
})
export class NewNotesPage implements OnInit {
  form:FormGroup=this.fb.group({
    title:[
      [],
      Validators.required,
    ],
    content:[
      [],
      Validators.required,
    ]
  })
  note: any={};
   /* notes:Item[]=[];
  newNote:Item=<Item>{}; */
  constructor(private fb:FormBuilder,private storageService:StorageService) {
    /* this.plt.ready().then(()=>{
      this.loadItems()
    }); */
   }

  /* addNewNote(){
     this.newNote.modified=Date.now();
     this.newNote.id=Date.now();

     this.storageService.addNewNote(this.newNote).then(note=>{
       this.newNote=<Item>{};
       this.showToast('Note added!!!');
       this.loadItems();
     });
   } */
    /* loadItems() {
    this.storageService.getNote().then(notes=>{
      this.notes=notes;
    });
  } */
   /* showToast(arg0: string) {
    throw new Error('Method not implemented.');
  } */
  ngOnInit() {

  }
 onSubmit(){
    if(this.form.valid){
      /*  let newNote:Notes={
        title:this.form.get("title").value,
        content:this.form.get("content").value,
      } */
      console.log(this.form.value);
      this.note=Object.assign(this.note,this.form.value);
      this.storageService.addNote(this.note);
      this.form.reset()
    }
    else{
      console.log("Invalid form \n");
    }
  }


}
