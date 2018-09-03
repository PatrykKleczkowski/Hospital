package pl.softsystem.hospital.web.dto;


import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.List;
@Getter
@Setter
public class ExaminationProcessRequest {

    private Long patientId;
    private Long examinationId;
    private List <QuestionWithValueDto> questionWithValues;
}
