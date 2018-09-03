package pl.softsystem.hospital.application.service;

import pl.softsystem.hospital.domain.model.Examination;
import pl.softsystem.hospital.domain.model.ExaminationType;

public interface ExaminationService {
    Examination saveExamination(Examination examination);

    Examination findById(Long id);

    Examination getExaminationByType(ExaminationType type);
}
