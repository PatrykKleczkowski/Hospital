package pl.softsystem.hospital.web.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.softsystem.hospital.application.service.ExaminationService;
import pl.softsystem.hospital.domain.model.Examination;
import pl.softsystem.hospital.application.service.Implementation.ExaminationServiceImplemenetation;
import pl.softsystem.hospital.domain.model.Patient;
import pl.softsystem.hospital.domain.repository.ExaminationRepository;
import pl.softsystem.hospital.web.dto.ExaminationWithQuestionDto;

import java.util.List;

@RestController
@RequestMapping("/api/examinations")
@CrossOrigin(origins="http://localhost:4200",allowedHeaders = "*")
public class ExaminationController {


    @Autowired
    private ExaminationServiceImplemenetation examinationServiceImplemenetation;

    @Autowired
    private ExaminationRepository examinationRepository;



    @GetMapping
    public List<Examination> getAllExamination() {
        return examinationRepository.findAll();
    }

    @GetMapping("{id}")
    public ExaminationWithQuestionDto getWithQuestions(@PathVariable Long id){
     return  examinationServiceImplemenetation.getWithQuestions(id);
    }

    @PostMapping
    public Examination saveExamination(@RequestBody Examination examination){
        return examinationServiceImplemenetation.saveExamination(examination);
    }
    @PutMapping
    public Examination updateExamination(@RequestBody Examination examination){
        return examinationServiceImplemenetation.saveExamination(examination);
    }

    @DeleteMapping("{id}")
    public void deleteExamination(@PathVariable("id") Long id){
        examinationRepository.deleteById(id);
    }









}
