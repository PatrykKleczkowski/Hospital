import { Component, OnInit } from '@angular/core';
import {Examination} from '../../domain/examination';
import {ExaminationService} from '../../service/examination.service';
import {Router} from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, } from '@angular/router';
import {Question } from '../../domain/question';
import { filter } from 'rxjs/operators';
import { QuestionService } from '../../service/question.service';

@Component({
  selector: 'app-add-examination',
  templateUrl: './add-examination.component.html',
  styleUrls: ['./add-examination.component.scss']
})
export class AddExaminationComponent implements OnInit {

  constructor(private examinationService: ExaminationService,
     private activatedRouter: ActivatedRoute,
    private questionService: QuestionService,
     private router: Router, private fb: FormBuilder) { }
     examination: Examination;

     examinationForm: FormGroup;
     questionForm: FormGroup;
questionList: Question[] = [];

ngOnInit() {
  this.createForms();

}
createForms() {
  this.examinationForm = this.fb.group({
    name: '',
    type: '',
  });
  this.questionForm = this.fb.group({
    name: ['']
  });
}

// initList(){
//         this.activatedRouter.paramMap.subscribe(params => {
//         const id = params.get('id');
//         if (id) {
//           this.updateid = +id;
//         this.examinationService.getExaminationWithQuestions(this.updateid).
//         subscribe(result => this.examination = result);
// }});
// }
onExaminationSubmit() {
  const exName = this.examinationForm.value.name.trim();
  const exType = this.examinationForm.value.type.trim();
  let examination: Examination = new Examination(exName, exType);
  this.examinationService.createExamination(examination).subscribe((examinationRes: any) => {
    examination = examinationRes as Examination;

    for (let i = 0; i < this.questionList.length; i++) {
      this.questionList[i].examination = examination;
      console.log(this.questionList[i]);
    }

    this.questionService.addAll(this.questionList, examination.id).subscribe((questionRes: any) => {
   this.questionList = questionRes as Question[];
      for (let i = 0; i < this.questionList.length; i++) {
        console.log(this.questionList[i]);
      }

      this.examinationForm.reset();
    this.questionList = [];
    }
  );

  });
}
onQuestionSubmit(value: any) {
  console.log('Dodaj questiona');
  const questionN = value.name.trim();
  console.log(questionN);
  const q: Question = new Question(null, questionN);
  console.log(q.name);
  this.questionList.push(q);
  this.questionForm.reset();
}
  }
