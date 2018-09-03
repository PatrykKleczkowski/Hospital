package pl.softsystem.hospital.web.dto;

import lombok.Getter;
import lombok.Setter;
import pl.softsystem.hospital.domain.model.ExaminationType;
import pl.softsystem.hospital.domain.model.Question;

import java.util.List;
@Getter
@Setter
public class ExaminationWithQuestionDto {
    private Long id;
    private String name;
    private ExaminationType type;
    private List<Question> questions;

}
