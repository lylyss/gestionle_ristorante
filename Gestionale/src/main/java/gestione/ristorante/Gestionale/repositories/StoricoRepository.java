package gestione.ristorante.Gestionale.repositories;

import gestione.ristorante.Gestionale.entities.Storico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoricoRepository extends JpaRepository<Storico, Long> {
}
