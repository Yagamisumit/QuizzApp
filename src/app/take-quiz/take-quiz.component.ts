import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {DataModel} from '../model/DataModel';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {

  constructor(private http: HttpClient) { }
  // @ts-ignore
  myQuizData: DataModel[];



  // tslint:disable-next-line:typedef
  // @ts-ignore
  searchText: string;

  ngOnInit(): void {
    this.getAll().subscribe( res =>
      this.myQuizData = res
    );
  }
  getAll(){
    return this.http.get<any>('http://localhost:8080/quizzes/');
  }

}



