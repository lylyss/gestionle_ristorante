package gestione.ristorante.Gestionale.entities;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "menu")
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "menu", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Pietanza> pietanze = new ArrayList<>();

    public Menu() {}

    public Menu(List<Pietanza> pietanze) {
        this.pietanze = pietanze;
        // assegno il riferimento inverso
        this.pietanze.forEach(p -> p.setMenu(this));
    }

    public Long getId() {
        return id;
    }

    public List<Pietanza> getPietanze() {
        return pietanze;
    }

    public void setPietanze(List<Pietanza> pietanze) {
        this.pietanze = pietanze;
        this.pietanze.forEach(p -> p.setMenu(this));
    }
}
