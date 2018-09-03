import { Component, OnInit, Input } from '@angular/core';
import { ExaminationService } from '../../service/examination.service';
import { Examination } from '../../domain/examination';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-examination',
  templateUrl: './list-examination.component.html',
  styleUrls: ['./list-examination.component.scss']
})
export class ListExaminationComponent implements OnInit {
  examinations: Examination[];

  @Input() examination: Examination;

  constructor(private examinationService: ExaminationService, private _router: Router) { }
  ngOnInit() {
    this.examinationService.getExaminations().subscribe((examinations) => {
      console.log(examinations);
      this.examinations = examinations;
    });
  }
  onSelect(examination) {
    this._router.navigate(['/examinationList/upsert', examination.id]);
  }
  createExamination() {
    this._router.navigate(['/examinationList/upsert']);
  }

  deleteExamination(examination: Examination) {
    this.examinationService.delete(examination.id).subscribe(() =>
      this.examinations.splice(this.examinations.indexOf(examination, 0), 1)
    );
  }
}




