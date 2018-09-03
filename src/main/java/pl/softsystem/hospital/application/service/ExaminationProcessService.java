package pl.softsystem.hospital.application.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.softsystem.hospital.domain.model.*;
import pl.softsystem.hospital.domain.repository.ExaminationRepository;
import pl.softsystem.hospital.domain.repository.PatientRepository;
import pl.softsystem.hospital.web.dto.ExaminationProcessRequest;
import pl.softsystem.hospital.web.dto.PatientExaminationDto;
import pl.softsystem.hospital.web.dto.QuestionWithValueDto;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ExaminationProcessService {

    @Autowired
    private ExaminationRepository examinationRepository;
    @Autowired
    private PatientRepository patientRepository;

    @Transactional //do rollbacku
    public PatientExaminationDto savePatientExamination(ExaminationProcessRequest examinationProcessRequest) {

        Patient patient = patientRepository.getOne(examinationProcessRequest.getPatientId());
        Examination examination = examinationRepository.getOne(examinationProcessRequest.getExaminationId());

        PatientExamination patientExamination=patient.createPatientExamination(patient, examination);
       

        saveResultPatientExamination(patientExamination,
                examination.getQuestions(),
                examinationProcessRequest.getQuestionWithValues(),
                patient);

        patient.getPatientExaminations().add(patientExamination);


        return new PatientExaminationDto(patient.getName(), examination.getName());
    }

    private void saveResultPatientExamination(PatientExamination patientExamination,
                                              List<Question> questions,
                                              List<QuestionWithValueDto> questionsWithValues,
                                              Patient patient) {

        questions.forEach(q -> questionsWithValues.stream()
                .filter(questionWithValueDto -> q.getId().equals(questionWithValueDto.getQuestionId()))
                .findFirst()
                .ifPresent(found -> patientExamination.addResult(new Result(found.getValue(), q.getName(), patient, patientExamination)))
        );
    }
}
