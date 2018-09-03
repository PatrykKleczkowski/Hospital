import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// tslint:disable-next-line:import-spacing
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ListpatientComponent } from './components/listpatient/listpatient.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
// tslint:disable-next-line:import-spacing
import { PatientService } from './service/patient.service';
import './styles/css/bootstrap.min.css';
import { ListExaminationComponent } from './components/list-examination/list-examination.component';
import { ListQuestionsComponent } from './components/list-questions/list-questions.component';
import { ExaminationService } from './service/examination.service';
import { QuestionService } from './service/question.service';
import { AddExaminationComponent } from './components/add-examination/add-examination.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExaminationPatientComponent } from './components/examination-patient/examination-patient.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExaminationWithQuestionsComponent } from './components/examination-with-questions/examination-with-questions.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ExaminationProcessDialogComponent } from './components/examination-process-dialog/examination-process-dialog.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';






const appRoutes: Routes = [
  { path: '', component: ListpatientComponent },
  { path: 'addPatient', component: AddPatientComponent },
  { path: 'examinationList', component: ListExaminationComponent },
  { path: 'examinationList/upsert/:id', component: AddExaminationComponent },
  { path: 'examinationList/upsert', component: AddExaminationComponent },
  { path: 'examinationPatient', component: ExaminationPatientComponent },
  { path: 'examinationList/:id/questions', component: ListQuestionsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListpatientComponent,
    AddPatientComponent,
    ListExaminationComponent,
    ListQuestionsComponent,
    AddExaminationComponent,
    ExaminationPatientComponent,
    NavbarComponent,
    ExaminationWithQuestionsComponent,
    ExaminationProcessDialogComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule
  ],

  entryComponents: [
    ExaminationProcessDialogComponent
  ],

  providers: [PatientService, ExaminationService, QuestionService],
  bootstrap: [AppComponent],
})
export class AppModule { }
