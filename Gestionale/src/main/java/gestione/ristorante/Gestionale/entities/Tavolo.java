package gestione.ristorante.Gestionale.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "tavoli")
public class Tavolo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int numeroclienti;
    private int totale;
    @OneToMany(mappedBy = "ordini", cascade = CascadeType.ALL)
    private List<Ordine> ordini;

    public Tavolo() {
    }

    public Tavolo(List<Ordine> ordini, int totale, int numeroclienti) {
        this.ordini = ordini;
        this.totale = totale;
        this.numeroclienti = numeroclienti;
    }

    public Long getId() {
        return id;
    }


    public int getNumeroclienti() {
        return numeroclienti;
    }

    public void setNumeroclienti(int numeroclienti) {
        this.numeroclienti = numeroclienti;
    }

    public int getTotale() {
        return totale;
    }

    public void setTotale(int totale) {
        this.totale = totale;
    }

    public List<Ordine> getOrdini() {
        return ordini;
    }

    public void setOrdini(List<Ordine> ordini) {
        this.ordini = ordini;
    }
}
