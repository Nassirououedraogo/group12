import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})

export class NotesPage implements OnInit {
  notesListe: any;


  constructor() { }

  ngOnInit() {
    this.notesListe=JSON.parse(localStorage.getItem('Notes'))
  }

}
