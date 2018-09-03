import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
// tslint:disable-next-line:import-spacing
import{Patient}  from '../domain/patient';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PatientService {
  private baseUrl = '/api';

public patient = new Patient();
constructor(private http: HttpClient) {
   }

   getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseUrl + '/patients');
}
createPatient(patient: Patient) {
  return this.http.post(this.baseUrl + '/patients', patient);
}
deletePatient(id: Number) {
  return this.http.delete(this.baseUrl + '/patient/' + id);
}
updatePatient(patient: Patient) {
  return this.http.put(this.baseUrl + '/patients', patient);
}

errorHandler(error: Response) {
return Observable.throw(error || 'SERVER ERROR');
}

setter(patient: Patient) {
this.patient = patient;
}
getter() {
  return this.patient;
}
}
