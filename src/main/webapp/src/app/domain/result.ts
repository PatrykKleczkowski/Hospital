import { Examination } from './examination';
import { Question } from './question';
import { Patient } from './patient';
export class Result {
    id: Number;
    value: string;
    questionName: string;
    patient: Patient;

    constructor(id: Number, value: string, questionName: string, patient: Patient) {
        this.id = id;
        this.value = value;
        this.questionName = questionName;
        this.patient = patient;
    }
}
