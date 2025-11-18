package gestione.ristorante.Gestionale.repositories;

import gestione.ristorante.Gestionale.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
