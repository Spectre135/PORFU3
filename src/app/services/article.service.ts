import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

//import { Article } from './article';
import { Data } from '../data';

@Injectable()
export class ArticleService {
    //URLs for CRUD operations
    dataUrl = 'http://localhost:8080/PORFU_REST/rest/porocanje/';
    saveUrl = 'http://localhost:8080/PORFU_REST/rest/save/';
    listUrl = 'http://localhost:8080/PORFU_REST/rest/list/';
    private jsonFileURL = '../assets/test.data.json';

    //Create constructor to get Http instance

    constructor(private http: Http, public router: Router) {
    }

    //Fetch data

        getJSONData(searchString: string,
          reportType: string,
          pageIndex: number,
          pageSizeSelected: number,
          sortKey: string,
          asc: string): Observable<Data> {
            return this.http.get(this.jsonFileURL)
            .map(this.extractData)
            .catch(this.handleError);

          }

/*
    getJSONData(searchString: string,
        reportType: string,
        pageIndex: number,
        pageSizeSelected: number,
        sortKey: string,
        asc: string): Observable<Data> {

        const authToken = '4d03c3ad-1449-422a-b770-ebe247945529';
        const url = this.dataUrl + searchString;
        const cpHeaders: Headers = new Headers;

        cpHeaders.append('Content-Type', 'application/json');
        cpHeaders.append('authToken', authToken);

        const cpParams = new URLSearchParams();

        cpParams.set('reportType', reportType);
        cpParams.set('pageIndex', <any>pageIndex);
        cpParams.set('pageSizeSelected', <any>pageSizeSelected);
        cpParams.set('sortKey', sortKey);
        cpParams.set('asc', asc);

        const options = new RequestOptions({ headers: cpHeaders, params: cpParams });

        return this.http.get(url, options)
            .map(this.extractData)
            .catch(this.handleError);

    }
*/
    private extractData(res: Response) {
        const body = res.json();
        return body;
    }
    private handleError(error: any) {
        console.error(error.message || error);
        //return Observable.throw(error.status);
        return Observable.throw(new Error(error));
        //return Observable.throw(error.json().error());
    }
}
