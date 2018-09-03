package pl.softsystem.hospital.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pl.softsystem.hospital.domain.model.Examination;
import pl.softsystem.hospital.domain.model.ExaminationType;
import pl.softsystem.hospital.domain.model.Question;

import java.util.List;

public interface ExaminationRepository extends JpaRepository<Examination, Long> {
    Examination getExaminationByType(ExaminationType type);
    Examination  getExaminationById(Long id);

    // todo fetch eager with questions
//    @Query("select e from Examination e left join fetch Question q on")
//    Examination getWithQuestions(Long id);
}
