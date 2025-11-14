package gestione.ristorante.Gestionale.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "storico")
public class Storico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany(mappedBy = "ordine", cascade = CascadeType.ALL)
    private List<Ordine> ordini;
    private LocalDateTime data;
    @OneToMany(mappedBy = "pietanze", cascade = CascadeType.ALL)
    private List<Pietanza> pietanze;
    public Storico() {
    }
    public Storico(List<Ordine> ordini, LocalDateTime data, List<Pietanza> pietanze) {
        this.ordini = ordini;
        this.data = data;
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

    public LocalDateTime getData() {
        return data;
    }

    public void setData(LocalDateTime data) {
        this.data = data;
    }

    public List<Ordine> getOrdini() {
        return ordini;
    }

    public void setOrdini(List<Ordine> ordini) {
        this.ordini = ordini;
    }
}
