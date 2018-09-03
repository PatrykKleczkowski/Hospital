package pl.softsystem.hospital.web.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionWithValueDto {

    private Long questionId;
    private String value;
}
