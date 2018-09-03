import { Component, OnInit } from '@angular/core';
import { Examination } from './../../domain/examination';
import { Patient } from './../../domain/patient';
import { ExaminationService } from './../../service/examination.service';
import { PatientService } from './../../service/patient.service';
import { log } from 'util';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExaminationProcessDialogComponent } from '../../components//examination-process-dialog/examination-process-dialog.component';



@Component({
  selector: 'app-examination-patient',
  templateUrl: './examination-patient.component.html',
  styleUrls: ['./examination-patient.component.scss']
})
export class ExaminationPatientComponent implements OnInit {

  constructor(private examinationService: ExaminationService,
    private patientService: PatientService,
    private dialog: MatDialog) { }

  examinations: Examination[];
  public patients: Patient[];

  ngOnInit() {
    this.examinationService.getExaminations().subscribe((examinations) => {
      console.log(examinations);
      this.examinations = examinations;
    });

    this.patientService.getPatients().subscribe((patients) => {
      console.log(patients);
      this.patients = patients;
    });



  }

  openExamPatientDialog(selectedExamination, selectedPatient) {
    const dialogRef = this.dialog.open(ExaminationProcessDialogComponent, {
      height: '400px',
      width: '400px',
      data: { patient: selectedPatient, examination: selectedExamination }

    });
    console.log(selectedPatient);
    console.log(selectedExamination);
  }

}
