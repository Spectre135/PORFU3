import {NgModule, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgSelectizeModule} from 'ng-selectize/ng-selectize.module';

import {AppComponent} from './app.component';
import {ArticleComponent} from './article.component';
import {ArticleService} from './services/article.service';
import {EditArticleComponent} from './edit.article.component';

import { SpinnerModule } from './spinner/';

@NgModule({

    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        NgSelectizeModule,
        SpinnerModule
    ],
    declarations: [
        AppComponent,
        ArticleComponent,
        EditArticleComponent
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
