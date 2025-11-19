package gestione.ristorante.Gestionale.entities;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "carrelli")
public class Carrello {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "carrello", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Ordine> ordini = new ArrayList<>();

    @OneToOne(mappedBy = "carrello", cascade = CascadeType.ALL)
    private Scontrino scontrino;

    public Long getId() { return id; }

    public List<Ordine> getOrdini() { return ordini; }
    public void setOrdini(List<Ordine> ordini) {
        this.ordini = ordini;
        for (Ordine o : ordini) {
            o.setCarrello(this);
        }
    }

    public Scontrino getScontrino() { return scontrino; }
    public void setScontrino(Scontrino scontrino) { this.scontrino = scontrino; }
}