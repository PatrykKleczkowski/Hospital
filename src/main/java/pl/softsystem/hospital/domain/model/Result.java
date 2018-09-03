package pl.softsystem.hospital.domain.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "result_value")
    private String value;

//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "id_question")
//    private Question question;

    @Column(name = "question_name", nullable = false)
    private String questionName;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_patient")
    private Patient patient;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_patient_examination")
    private PatientExamination patientExamination;

    public Result(String value, String questionName, Patient patient, PatientExamination patientExamination) {
        this.value = value;
        this.questionName = questionName;
        this.patient = patient;
        this.patientExamination = patientExamination;
    }
}
