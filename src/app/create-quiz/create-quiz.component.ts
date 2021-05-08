import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  flexRadioDefault= false;
  CorrectAnswer=true;
  Q3OptionA= false;
  Q3OptionB= false;
  Q3OptionC= false;
  Q3OptionD= false;


  
  
  //@ts-ignore


  form = new FormGroup({
    Title: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),

    Question1: new FormControl('', [Validators.required]),
    flexRadioDefault: new FormControl('', [Validators.required]),
    

    Question2: new FormControl('', [Validators.required]),
    CorrectAnswer: new FormControl('', [Validators.required]),
    Q2Option2: new FormControl('', [Validators.required]),
    Q2Option3: new FormControl('', [Validators.required]),
    Q2Option4: new FormControl('', [Validators.required]),

    Question3: new FormControl('', [Validators.required]),
    Q3OptionA: new FormControl(''),
    Q3Option1: new FormControl(''), 
    Q3OptionB: new FormControl(''),
    Q3Option2: new FormControl(''), 
    Q3OptionC: new FormControl(''),
    Q3Option3: new FormControl(''),
    Q3OptionD: new FormControl(''), 
    Q3Option4: new FormControl(''), 

    Question4: new FormControl('', [Validators.required]),
  })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  Submit(){
    const formData = {
    "Title": this.form.controls['Title'].value, 
    "Description": this.form.controls['Description'].value,

    "Question1": this.form.controls['Question1'].value,

    "Question2": this.form.controls['Question2'].value,
    "CorrectAnswer": this.form.controls['CorrectAnswer'].value,
    "Q2Option2": this.form.controls['Q2Option2'].value,
    "Q2Option3": this.form.controls['Q2Option3'].value, 
    "Q2Option4": this.form.controls['Q2Option4'].value,

    "Question3": this.form.controls['Question3'].value,
    "Q3OptionA": this.form.controls['Q3OptionA'].value,
    "Q3Option1": this.form.controls['Q3Option1'].value,
    "Q3OptionB": this.form.controls['Q3OptionB'].value,
    "Q3Option2": this.form.controls['Q3Option2'].value,
    "Q3OptionC": this.form.controls['Q3OptionC'].value,
    "Q3Option3": this.form.controls['Q3Option3'].value,
    "Q3OptionD": this.form.controls['Q3OptionD'].value,
    "Q3Option4": this.form.controls['Q3Option4'].value,

    "Question4": this.form.controls['Question4'].value,
    }
    console.log(formData);
    this.http.post('http://localhost:8080/new/', formData).subscribe();
    this.form.reset();
  }

}
