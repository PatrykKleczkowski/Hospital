package pl.softsystem.hospital.application.service;

import pl.softsystem.hospital.domain.model.Question;

import java.util.List;

public interface QuestionService {
    Question saveQuestion(Question question);
    List<Question> saveAll(List<Question> questions);

}
