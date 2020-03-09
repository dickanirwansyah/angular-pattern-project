import { Injectable } from '@angular/core';
import { ApiConstant } from '../../util/ApiConstant';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    
    constructor(private httpClient: HttpClient){}

    getListCategory():Observable<any> {
        return this.httpClient.get(ApiConstant.BASE_URL+"category/" + "list-category")
    }

    getSaveCategory(category):Observable<any> {
        return this.httpClient.post(ApiConstant.BASE_URL+"category/" + "save-category", {
            name: category.name});
    }

    getCategoryById(id:number):Observable<any> {
        return this.httpClient.get(ApiConstant.BASE_URL+"category/" + "get-category/"+id)
    }

    getUpdateCategory(id:number, category):Observable<any> {
        return this.httpClient.post(ApiConstant.BASE_URL+"category/"+"update-category/"+id, 
        {
            name: category.name
        })
    }
}