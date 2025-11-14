package gestione.ristorante.Gestionale.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "menù")
public class Menù {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany(mappedBy = "pietanze", cascade = CascadeType.ALL)
    private List<Pietanza> pietanze;

    public Menù() {
    }

    public Menù(List<Pietanza> pietanze) {
        this.pietanze = pietanze;
    }

    public Long getId() {
        return id;
    }


    public List<Pietanza> getPietanze() {
        return pietanze;
    }

    public void setPietanze(List<Pietanza> pietanze) {
        this.pietanze = pietanze;
    }
}
