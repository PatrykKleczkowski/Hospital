package pl.softsystem.hospital.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.softsystem.hospital.domain.model.Result;

public interface ResultRepository extends JpaRepository<Result, Long> {
}
