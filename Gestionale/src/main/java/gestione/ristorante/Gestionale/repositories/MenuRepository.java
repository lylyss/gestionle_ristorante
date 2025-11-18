package gestione.ristorante.Gestionale.repositories;

import gestione.ristorante.Gestionale.entities.MenuRestaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.awt.*;

public interface MenuRepository extends JpaRepository<MenuRestaurant, Long> {
}
