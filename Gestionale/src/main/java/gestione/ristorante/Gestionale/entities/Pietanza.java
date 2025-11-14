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
    private String fotopietanza;
    @ManyToMany(mappedBy = "pietanze")
    private Set<Ordine> ordini = new HashSet<>();

    public Pietanza() {
    }

    public Pietanza(String nome, String fotopietanza, BigDecimal prezzo, String descrizione) {
        this.nome = nome;
        this.fotopietanza = fotopietanza;
        this.prezzo = prezzo;
        this.descrizione = descrizione;
    }

    public Long getId() {
        return id;
    }


    public String getFotopietanza() {
        return fotopietanza;
    }

    public void setFotopietanza(String fotopietanza) {
        this.fotopietanza = fotopietanza;
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
}
