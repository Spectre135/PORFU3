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
}
