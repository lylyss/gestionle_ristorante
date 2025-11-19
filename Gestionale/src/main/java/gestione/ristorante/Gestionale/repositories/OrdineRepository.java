package gestione.ristorante.Gestionale.repositories;

import gestione.ristorante.Gestionale.entities.Ordine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdineRepository extends JpaRepository<Ordine, Long> {
}
