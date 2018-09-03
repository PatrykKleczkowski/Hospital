import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
// tslint:disable-next-line:import-spacing
import{Question, ExaminationProcessRequest}  from '../domain/question';
import { HttpClient } from '@angular/common/http';
import { PatientExaminationDto } from '../domain/examination';

@Injectable({
  providedIn: 'root'
})
export class ExaminationProcessService {

   private baseUrl = 'api/examination-process';
  constructor(private http: HttpClient) {
  }

  create(examinationProcessRequest: ExaminationProcessRequest): Observable<PatientExaminationDto> {
    return this.http.post<PatientExaminationDto>(this.baseUrl, examinationProcessRequest);
  }

 

}
