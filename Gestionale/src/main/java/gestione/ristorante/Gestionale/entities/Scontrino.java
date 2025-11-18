package gestione.ristorante.Gestionale.entities;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "scontrini")
public class Scontrino {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "carrello_id")
    private Carrello carrello;

    private BigDecimal totale;

    public Long getId() { return id; }
    public Carrello getCarrello() { return carrello; }
    public void setCarrello(Carrello carrello) { this.carrello = carrello; }
    public BigDecimal getTotale() { return totale; }
    public void setTotale(BigDecimal totale) { this.totale = totale; }
}