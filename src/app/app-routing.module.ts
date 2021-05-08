import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';

const routes: Routes = [
  {path:'', component: CreateQuizComponent},
  {path:'createQuiz', component: CreateQuizComponent},
  {path: 'takeQuiz', component: TakeQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
