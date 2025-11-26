package gestione.ristorante.Gestionale.repositories;

import gestione.ristorante.Gestionale.entities.Pietanza;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface PietanzaRepository extends JpaRepository<Pietanza, Long> {
    Set<Pietanza> findAllByIdIn(List<Long> ids);
}
