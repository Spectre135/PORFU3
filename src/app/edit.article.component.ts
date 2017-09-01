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
}
