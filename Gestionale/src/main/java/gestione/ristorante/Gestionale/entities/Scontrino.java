package gestione.ristorante.Gestionale.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "scontrini")
public class Scontrino {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "users_id")
    private User user;
    @OneToOne(mappedBy = "carrello", cascade = CascadeType.ALL)
    private Carrello carrello;
    private LocalDateTime dataEmissione = LocalDateTime.now();

    public Scontrino() {
    }
    public Scontrino(User user, Carrello carrello, LocalDateTime dataEmissione) {
        this.user = user;
        this.carrello = carrello;
        this.dataEmissione = dataEmissione;
    }

    public Long getId() {
        return id;
    }


    public LocalDateTime getDataEmissione() {
        return dataEmissione;
    }

    public void setDataEmissione(LocalDateTime dataEmissione) {
        this.dataEmissione = dataEmissione;
    }

    public Carrello getCarrello() {
        return carrello;
    }

    public void setCarrello(Carrello carrello) {
        this.carrello = carrello;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
