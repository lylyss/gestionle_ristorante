package gestione.ristorante.Gestionale.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import gestione.ristorante.Gestionale.enums.TipoPietanza;
import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "pietanze")
public class Pietanza {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private BigDecimal prezzo;
    private String descrizione;
    private String foto;

    @Enumerated(EnumType.STRING)
    private TipoPietanza tipoPietanza;

    @ManyToOne
    @JoinColumn(name = "menu_id")
    @JsonBackReference
    private MenuRestaurant menu;

    public Pietanza() {}

    public Pietanza(String nome, String foto, BigDecimal prezzo, String descrizione, TipoPietanza tipoPietanza) {
        this.nome = nome;
        this.foto = foto;
        this.prezzo = prezzo;
        this.descrizione = descrizione;
        this.tipoPietanza = tipoPietanza;
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public BigDecimal getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(BigDecimal prezzo) {
        this.prezzo = prezzo;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public TipoPietanza getTipoPietanza() {
        return tipoPietanza;
    }

    public void setTipoPietanza(TipoPietanza tipoPietanza) {
        this.tipoPietanza = tipoPietanza;
    }

    public MenuRestaurant getMenu() {
        return menu;
    }

    public void setMenu(MenuRestaurant menu) {
        this.menu = menu;
    }
}