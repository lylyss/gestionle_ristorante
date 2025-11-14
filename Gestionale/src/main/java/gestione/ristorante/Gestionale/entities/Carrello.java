package gestione.ristorante.Gestionale.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "carrelli")
public class Carrello {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany (mappedBy = "ordine", cascade = CascadeType.ALL)
    private List<Ordine> ordini;

    public Carrello() {
    }
    public Carrello(List<Ordine> ordini) {
        this.ordini = ordini;
    }
    public Long getId() {
        return id;
    }
    public List<Ordine> getOrdini() {
        return ordini;
    }
    public void setOrdini(List<Ordine> ordini) { this.ordini = ordini; }
}
