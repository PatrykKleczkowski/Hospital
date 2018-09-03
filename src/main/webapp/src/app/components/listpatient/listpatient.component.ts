import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../service/patient.service';
import {Patient} from '../../domain/patient';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listpatient',
  templateUrl: './listpatient.component.html',
  styleUrls: ['./listpatient.component.scss']
})
export class ListpatientComponent implements OnInit {

  

  
public patients: Patient[];

  constructor(private _patientService: PatientService, private _router: Router) { }

  ngOnInit() {
    this._patientService.getPatients().subscribe((patients) => {console.log(patients);
      this.patients = patients;
    },
    (error) => {console.log(error); }
    );
  }
deleteP(patient) {
  this._patientService.deletePatient(patient.id).subscribe((data) => {
    this.patients.splice(this.patients.indexOf(patient), 1);
  }, (error) => {console.log(error); }
);
}
updateP(patient) {
this._patientService.setter(patient);
this._router.navigate(['/addPatient']);
}
createP() {
  const patient = new Patient();
  this._patientService.setter(patient);
  this._router.navigate(['/addPatient']);
}



  
}
