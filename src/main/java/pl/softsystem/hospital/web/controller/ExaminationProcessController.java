package pl.softsystem.hospital.web.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.softsystem.hospital.application.service.ExaminationProcessService;
import pl.softsystem.hospital.web.dto.ExaminationProcessRequest;
import pl.softsystem.hospital.web.dto.PatientExaminationDto;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/examination-process")
public class ExaminationProcessController {


    @Autowired
    private ExaminationProcessService examinationProcessService;


    @PostMapping
    public ResponseEntity<PatientExaminationDto> savePatientExamination(@RequestBody ExaminationProcessRequest examinationProcessRequest){
        return ResponseEntity.ok(examinationProcessService.savePatientExamination(examinationProcessRequest));
    }

}
