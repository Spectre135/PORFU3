import { Input, Component, OnInit, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap';
import { ArticleService } from './services/article.service';
import { PagerService } from './services/paging.service';
import { Article } from './article';
import { Data } from './data';
import { EditArticleComponent } from './edit.article.component';
import { PageSizeValues} from './selectize/selectize.configs';
import { SELECTIZE_CONFIG} from './selectize/state.config';
import { NumberCode } from 'angular2localization';
import { Observable } from 'rxjs';

import { SpinnerModule } from './spinner/';

@Component({
   providers: [PagerService],
   selector: 'app-article',
   templateUrl: './article.component.html',
   styleUrls: ['../css/main.css']
})
export class ArticleComponent implements OnInit {
   // Component properties
   allArticles: Article[];
   searchString: string;
   asc: string;
   sortKey: string;
   statusCode: number;
   requestProcessing = false;
   processValidation = false;

   // pager object
   pager: any = {};
   pagedItems: any[];
   //rowsCount: number;
   @Input() pageSize: number;
   pageSizeList: any = PageSizeValues;
   pageIndex: number;
   config: any = SELECTIZE_CONFIG;

   //loading
   loading: boolean;


   //edit DTO
<<<<<<< HEAD
=======
   @ViewChild('lgModal') modal: ElementRef;
>>>>>>> 35b39b568577821067d71cd60cf3efb5a3e7f368
   public selectedDTO: Article;

   // Create constructor to get service instance
   constructor(private dtoService: ArticleService, private pagerService: PagerService) {
   }

   // Create ngOnInit() and and load articles
   ngOnInit(): void {
       // this.getData();
       this.searchString = '';
       this.asc = 'true';
       this.sortKey = 'null';
       // initialize to page 1
       this.pageSize = 10;
       this.pageIndex = 1;
       this.pager = this.pagerService.getPager(1, this.pageIndex, this.pageSize);
   }

   // Fetch all articles
   //Pazi izvaja se async zato kli�em setPage znotraj ko resolvam podatke
   getData() {
       this.loading = true;
       this.dtoService.getJSONData(this.getEmptyString(this.searchString), '*', this.pageIndex, this.pageSize, this.sortKey, this.asc).subscribe(
           data => {
                    this.allArticles = data.dataList;
                    //this.rowsCount   = data.rowsCount;
                    this.pager = this.pagerService.getPager(data.rowsCount, this.pageIndex, this.pageSize);
                    this.loading = false;
                    },
           errorCode => this.statusCode = errorCode);
   }

   // Perform preliminary processing configurations
   preProcessConfigurations() {
      this.statusCode = null;
      this.requestProcessing = true;
   }

   private getEmptyString(response: string) {
     if (response === '') {
         response = 'undefined';
       }
     return response;
   }

   //sort data
   sort(keyname: string) {
        this.sortKey = keyname;   //set the sortKey to the param passed
        if (this.asc === 'true') {
          this.asc = 'false';
        }else {
          this.asc = 'true';
        }
        //this.asc = !this.asc; //if true make it false and vice versa
        this.getData();
    }

   getSortClass(keyname: string) {

     if (this.sortKey === keyname) {
       if (this.asc === 'true') {
         return 'glyphicon glyphicon-triangle-top';
       } else {
         return 'glyphicon glyphicon-triangle-bottom';
       }
     } else {
       return '';
     }
   }

   //paging
   setPage(page: number) {
     if (page < 1 || page > this.pager.totalPages) {
       return;
     }
     this.pageIndex = page;
     this.getData();
   }

<<<<<<< HEAD
=======

   //edit on row click
   editDTO(item: Article) {
    
       this.selectedDTO = item;

       console.log(this.selectedDTO); 
       /*this.childModal.show();*/
    
     }
  
>>>>>>> 35b39b568577821067d71cd60cf3efb5a3e7f368
}


