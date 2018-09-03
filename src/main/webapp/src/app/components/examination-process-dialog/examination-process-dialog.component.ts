import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { QuestionService } from '../../service/question.service';
import { Question, QuestionWithResult, ExaminationProcessRequest } from '../../domain/question';
import { ExaminationProcessService } from '../../service/examination-process.service';




@Component({
  selector: 'app-examination-process-dialog',
  templateUrl: './examination-process-dialog.component.html',
  styleUrls: ['./examination-process-dialog.component.scss']
})
export class ExaminationProcessDialogComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<ExaminationProcessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private questionService: QuestionService,
    private examinationProcessService: ExaminationProcessService) { }

  //displayedColumns: string[] = ['name', 'value'];

  // questions: Question[];
  questionsWithResult: QuestionWithResult[] = [];

  ngOnInit() {
    this.questionService.getQuestions(this.data.examination.id).subscribe((questions) => {
      this.questionsWithResult = questions.map(q => {
        const questionWithResult = new QuestionWithResult();
        questionWithResult.questionId = q.id;
        questionWithResult.questionName = q.name;
        return questionWithResult;
      }
      );
      console.log(questions);
      // this.questions = questions;
    });

  }


  saveResult() {
    const examinationProcessRequest = {
      examinationId: this.data.examination.id,
      patientId: this.data.patient.id,
      questionWithValues: this.questionsWithResult
    } as ExaminationProcessRequest;

    console.log(examinationProcessRequest);

    this.examinationProcessService.create(examinationProcessRequest).subscribe();
  }


}