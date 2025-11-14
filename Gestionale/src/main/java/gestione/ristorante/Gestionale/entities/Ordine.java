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
    private Tavolo tavoli;
    private BigDecimal totale;
    private LocalDateTime dataeora;
    @ManyToMany @JoinTable(
            name = "ordine_pietanza",
            joinColumns = @JoinColumn(name = "ordine_id"),
            inverseJoinColumns = @JoinColumn(name = "pietanza_id")
    )
    private Set<Pietanza> pietanze = new HashSet<>();


    public Long getId() { return id; }


    public Tavolo getTavoli() { return tavoli; }
    public void setTavoli(Tavolo tavoli) { this.tavoli = tavoli; }

    public BigDecimal getTotale() { return totale; }
    public void setTotale(BigDecimal totale) { this.totale = totale; }

    public LocalDateTime getDataeora() { return dataeora; }
    public void setDataeora(LocalDateTime dataeora) { this.dataeora = dataeora; }

    public Set<Pietanza> getPietanze() { return pietanze; }
    public void setPietanze(Set<Pietanza> pietanze) { this.pietanze = pietanze; }
}

