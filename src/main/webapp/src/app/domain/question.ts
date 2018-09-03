import { Examination } from './examination';

export class Question {
    id: Number;
    name: string;
    examination: Examination;
    constructor(examination: Examination, name: string) {
        this.examination = examination;
        this.name = name;
    }
}

export class QuestionWithResult {
    questionName: string;
    questionId: Number;
    value?: string;
}

export class ExaminationProcessRequest {
    patientId: Number;
    examinationId: Number;
    questionWithValues: QuestionWithResult[];



}