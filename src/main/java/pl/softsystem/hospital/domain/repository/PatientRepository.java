package pl.softsystem.hospital.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.softsystem.hospital.domain.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {
}
