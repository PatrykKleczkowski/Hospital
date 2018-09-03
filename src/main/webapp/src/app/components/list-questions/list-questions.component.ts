import { Component, OnInit, Input } from '@angular/core';
import {QuestionService} from '../../service/question.service';
import {Question} from '../../domain/question';
import {Router} from '@angular/router';
import { Examination } from '../../domain/examination';
import { ActivatedRoute, Params, } from '@angular/router';
import { ExaminationService } from '../../service/examination.service';
@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.scss']
})
export class ListQuestionsComponent implements OnInit {
updateid: Number;
examination: Examination;
  constructor(private router: ActivatedRoute, private examinationService: ExaminationService) { }
  ngOnInit() {
      this.router.paramMap.subscribe(params => {
        this.updateid = parseInt(params.get('id'));
        this.examinationService.getExaminationWithQuestions(this.updateid).subscribe(result => this.examination = result);
   });
}
}
