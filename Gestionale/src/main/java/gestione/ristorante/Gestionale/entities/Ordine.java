package gestione.ristorante.Gestionale.entities;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "ordini")
public class Ordine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tavolo_id")
    private Tavolo tavolo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "carrello_id")
    private Carrello carrello;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "storico_id")
    private Storico storico;

    private BigDecimal totale;
    private LocalDateTime dataeora;

    @ManyToMany
    @JoinTable(
            name = "ordine_pietanza",
            joinColumns = @JoinColumn(name = "ordine_id"),
            inverseJoinColumns = @JoinColumn(name = "pietanza_id")
    )
    private Set<Pietanza> pietanze = new HashSet<>();


    public Long getId() { return id; }

    public Tavolo getTavolo() { return tavolo; }
    public void setTavolo(Tavolo tavolo) { this.tavolo = tavolo; }

    public Carrello getCarrello() { return carrello; }
    public void setCarrello(Carrello carrello) { this.carrello = carrello; }

    public Storico getStorico() { return storico; }
    public void setStorico(Storico storico) { this.storico = storico; }

    public BigDecimal getTotale() { return totale; }
    public void setTotale(BigDecimal totale) { this.totale = totale; }

    public LocalDateTime getDataeora() { return dataeora; }
    public void setDataeora(LocalDateTime dataeora) { this.dataeora = dataeora; }

    public Set<Pietanza> getPietanze() { return pietanze; }
    public void setPietanze(Set<Pietanza> pietanze) { this.pietanze = pietanze; }
}