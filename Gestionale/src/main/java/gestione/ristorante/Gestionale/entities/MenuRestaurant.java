package gestione.ristorante.Gestionale.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "menu")
public class MenuRestaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome; // puoi aggiungere altri attributi come descrizione, prezzo, ecc.

    @OneToMany(mappedBy = "menu", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<Pietanza> pietanze = new ArrayList<>();

    public MenuRestaurant() {}

    public MenuRestaurant(String nome) {
        this.nome = nome;
    }

    public MenuRestaurant(String nome, List<Pietanza> pietanze) {
        this.nome = nome;
        setPietanze(pietanze);
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
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

