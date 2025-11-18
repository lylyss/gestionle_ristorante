package gestione.ristorante.Gestionale.repositories;

import gestione.ristorante.Gestionale.entities.Carrello;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarrelloRepository extends JpaRepository<Carrello, Long> {
}
