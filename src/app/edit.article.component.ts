<<<<<<< HEAD
import { Component, OnInit, Input, Output, ViewChild, ElementRef, trigger, state, style, animate, transition } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { Article } from './article';

@Component({
  selector: 'edit-article',
  templateUrl: './edit.article.component.html',
  styleUrls: []

})
export class EditArticleComponent {
  @ViewChild('editModal') public editArticleModal: ModalDirective;

  @Input() editDto: Article;

  constructor() { }

  //edit on row click
  editDTO(item: Article) {

    this.editDto = item;

    console.log(this.editDto);
    //this.editArticleModal.show();
  }
=======
import { Component, OnInit } from '@angular/core';
import { Article } from './Article';


@Component({
    moduleId: 'article-edit',
    selector: 'pform',
    templateUrl: './edit.article.component.html'    
 })

export class ArticleEditComponent {
    constructor() {
    }

    editDto = Article;
    submitted = false;
    onSubmit() { 
        console.log('Sumbitted Form ! ');

        this.submitted = true; 

    }
    
  // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.editDto); }
>>>>>>> 35b39b568577821067d71cd60cf3efb5a3e7f368
}
