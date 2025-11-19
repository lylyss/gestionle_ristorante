package gestione.ristorante.Gestionale.repositories;

import gestione.ristorante.Gestionale.entities.Tavolo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TavoloRepository extends JpaRepository<Tavolo, Long> {
}
