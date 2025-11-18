package gestione.ristorante.Gestionale.entities;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "storico")
public class Storico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "storico", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Ordine> ordini = new ArrayList<>();

    private LocalDateTime data;

    @ManyToMany
    @JoinTable(
            name = "storico_pietanza",
            joinColumns = @JoinColumn(name = "storico_id"),
            inverseJoinColumns = @JoinColumn(name = "pietanza_id")
    )
    private List<Pietanza> pietanze = new ArrayList<>();

    public Storico() {}

    public Storico(List<Ordine> ordini, LocalDateTime data, List<Pietanza> pietanze) {
        setOrdini(ordini);
        this.data = data;
        this.pietanze = pietanze;
    }

    public Long getId() { return id; }

    public List<Ordine> getOrdini() { return ordini; }
    public void setOrdini(List<Ordine> ordini) {
        this.ordini = ordini;
        if(ordini != null) {
            for (Ordine o : ordini) {
                o.setStorico(this);
            }
        }
    }

    public LocalDateTime getData() { return data; }
    public void setData(LocalDateTime data) { this.data = data; }

    public List<Pietanza> getPietanze() { return pietanze; }
    public void setPietanze(List<Pietanza> pietanze) { this.pietanze = pietanze; }
}