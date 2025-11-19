package gestione.ristorante.Gestionale.entities;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tavoli")
public class Tavolo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int numeroclienti;
    private int totale;

    @OneToMany(mappedBy = "tavolo", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Ordine> ordini = new ArrayList<>();

    public Tavolo() {}

    public Tavolo(int numeroclienti, int totale) {
        this.numeroclienti = numeroclienti;
        this.totale = totale;
    }

    public Long getId() { return id; }
    public int getNumeroclienti() { return numeroclienti; }
    public void setNumeroclienti(int numeroclienti) { this.numeroclienti = numeroclienti; }
    public int getTotale() { return totale; }
    public void setTotale(int totale) { this.totale = totale; }

    public List<Ordine> getOrdini() { return ordini; }
    public void setOrdini(List<Ordine> ordini) { this.ordini = ordini; }

    public void addOrdine(Ordine ordine) {
        ordini.add(ordine);
        ordine.setTavolo(this);
    }

    public void removeOrdine(Ordine ordine) {
        ordini.remove(ordine);
        ordine.setTavolo(null);
    }
}
