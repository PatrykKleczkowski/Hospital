package pl.softsystem.hospital.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.softsystem.hospital.domain.model.Examination;
import pl.softsystem.hospital.domain.model.ExaminationType;
import pl.softsystem.hospital.domain.model.Question;
import pl.softsystem.hospital.application.service.Implementation.ExaminationServiceImplemenetation;
import pl.softsystem.hospital.application.service.Implementation.QuestionServiceImplementation;
import pl.softsystem.hospital.domain.repository.ExaminationRepository;
import pl.softsystem.hospital.domain.repository.QuestionRepository;

import java.util.List;

@RestController
@RequestMapping("/api/question/")
@CrossOrigin(origins="http://localhost:4200",allowedHeaders = "*")
public class QuestionController {

    @Autowired
    private QuestionServiceImplementation questionServiceImplementation;

    @Autowired
    private ExaminationServiceImplemenetation examinationServiceImplemenetation;

    @Autowired
    private ExaminationRepository examinationRepository;

    @Autowired
    private QuestionRepository questionRepository;

  /*  @PostMapping("/question/{type}")
    public Question saveQuestion(@RequestBody Question question, @PathVariable ExaminationType type) {
        Examination examination = examinationServiceImplemenetation.getExaminationByType(type);
        question.setExamination(examination);
        return questionServiceImplementation.saveQuestion(question);
    }*/

    @GetMapping("/{id}")
    public List<Question> DisplayQuestions(@PathVariable Long id) {
          return questionRepository.findAllByExaminationId(id);
    }

    @PostMapping
    public Question saveQuestion(@RequestBody Question question) {
        return questionServiceImplementation.saveQuestion(question);
    }

    @PostMapping("examination/{id}/add")
    public List<Question> add(@RequestBody List<Question> questions, @PathVariable("id") Long examinationId) {
       Examination examination=examinationServiceImplemenetation.findById(examinationId);
        for(Question question: questions){
            question.setExamination(examination);
        }
       return questionServiceImplementation.saveAll(questions);
    }

}