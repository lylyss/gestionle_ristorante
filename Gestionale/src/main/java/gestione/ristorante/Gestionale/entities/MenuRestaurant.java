package gestione.ristorante.Gestionale.entities;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "menu")
public class MenuRestaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "menu", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Pietanza> pietanze = new ArrayList<>();

    public MenuRestaurant() {}

    public MenuRestaurant(List<Pietanza> pietanze) {
        setPietanze(pietanze);
    }

    public Long getId() {
        return id;
    }

    public List<Pietanza> getPietanze() {
        return pietanze;
    }

    public void setPietanze(List<Pietanza> pietanze) {
        this.pietanze.clear();
        if (pietanze != null) {
            this.pietanze.addAll(pietanze);
            this.pietanze.forEach(p -> p.setMenu(this));
        }
    }

    public void addPietanza(Pietanza pietanza) {
        if (pietanza != null && !pietanze.contains(pietanza)) {
            pietanze.add(pietanza);
            pietanza.setMenu(this);
        }
    }

    public void removePietanza(Pietanza pietanza) {
        if (pietanza != null && pietanze.remove(pietanza)) {
            pietanza.setMenu(null);
        }
    }
}

