import {NgModule, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgSelectizeModule} from 'ng-selectize/ng-selectize.module';
import {ModalModule} from 'ng2-bootstrap';

import {AppComponent} from './app.component';
import {ArticleComponent} from './article.component';
import {ArticleService} from './services/article.service';
import {ArticleEditComponent} from './edit.article.component';

import {SpinnerModule} from './spinner/';

@NgModule({

    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        NgSelectizeModule,
        SpinnerModule,
        ModalModule.forRoot()

    ],
    declarations: [
        AppComponent,
        ArticleComponent,
        ArticleEditComponent

    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'sl-SI'},
        ArticleService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
