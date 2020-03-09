import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category-service/CategoryService';
import { Observable } from 'rxjs';
import { Category } from 'src/app/services/category-service/Category';
import { ApiConstant } from 'src/app/util/ApiConstant';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  buttonSave = false;
  categorys: Observable<Category[]>;
  category: Category = new Category();
  title = "Master Category"
  titleTable = "Data Category"
  form:any = {};
  isSuccessfull = false;
  errorMessage = "";
  isUpdate = false;

  constructor(private categoryService:CategoryService,
    private httpClient: HttpClient) {}

  ngOnInit() {
    this.fetchingListCategory();
    // this.hardCodeFetchingDataCategory();
    if (!sessionStorage.getItem(ApiConstant.TOKEN_KEY)){
       return window.location.href="/login";
    }
  }

  onSubmit(id){

    /** check if id number not null */
    if (id != null){  
      this.categoryService.getUpdateCategory(id, this.form).subscribe(
        data => {
          console.log(data);
          this.fetchingListCategory();
          this.clearData();
        }, err => {
          
          if(err.status === 409){
            alert("duplicate data")
          }

          console.log("opps error update data.."+err);

        })      
    }else{
      this.categoryService.getSaveCategory(this.form).subscribe(
        data => {
          console.log(data);
          
          if(data.message === "success" || data.code === 200){
            alert("success insert "+data.data.name);
          }

          this.fetchingListCategory();
          this.clearData();
        },
        err => {
          console.log("opps error saving data.. "+err);
        }
      )
    }
  }

  getCategoryById(id){
    this.categoryService.getCategoryById(id)
      .subscribe(data => {
         console.log(data.data);
         this.form.id = data.data.id;
         this.form.name = data.data.name;
         this.isUpdate = true;
      }, error => {
          console.log("oppss error fetching data..");
      })
  }

  clearData(){
    this.form.id = "";
    this.form.name = "";
    this.isUpdate = false;
  }

  fetchingListCategory(){
    this.categoryService.getListCategory()
      .subscribe(data => {
        this.categorys = data.data.content;
        console.log(this.categorys);
      }, error => {
        console.log("oppsss error fetching data..")
        console.log("error => ",error)
      })
  }

  // hardCodeFetchingDataCategory():Observable<any>{
  //   const headers = new HttpHeaders({
  //     'Content-Type' : 'application/json',
  //     'Authorization' : 'Bearer '+sessionStorage.getItem(ApiConstant.TOKEN_KEY)});
  //     return this.httpClient
  //     .get("http://localhost:8888/api/category/list-category", {headers: headers});
  // }
}
