import { ExaminationTypes } from './examination-types.enum';
import  { Question } from './question';
export class Examination {
    id: number;
    name: string;
    type: ExaminationTypes;
    questions:Question[];
    constructor(name:string, type:ExaminationTypes){
        this.name=name;
        this.type=type;
        this.questions=[];
    }
}

export class PatientExaminationDto{
    patientName: string;
    examinationName: string;
}
