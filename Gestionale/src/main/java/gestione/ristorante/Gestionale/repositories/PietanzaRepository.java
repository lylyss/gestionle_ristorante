package gestione.ristorante.Gestionale.repositories;

import gestione.ristorante.Gestionale.entities.Pietanza;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PietanzaRepository extends JpaRepository<Pietanza, Long> {
}
