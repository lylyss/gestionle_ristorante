package gestione.ristorante.Gestionale.entities;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "menu_id")
    private Menu menu;

    public Pietanza() {}

    public Pietanza(String nome, String foto, BigDecimal prezzo, String descrizione, Menu menu) {
        this.nome = nome;
        this.foto = foto;
        this.prezzo = prezzo;
        this.descrizione = descrizione;
        this.menu = menu;
    }

    public Long getId() {
        return id;
    }

    public String getFotopietanza() {
        return foto;
    }

    public void setFotopietanza(String fotopietanza) {
        this.foto = fotopietanza;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public BigDecimal getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(BigDecimal prezzo) {
        this.prezzo = prezzo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Menu getMenu() {
        return menu;
    }

    public void setMenu(Menu menu) {
        this.menu = menu;
    }
}
