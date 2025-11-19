package gestione.ristorante.Gestionale.payloads;

import gestione.ristorante.Gestionale.enums.TipoPietanza;

import java.math.BigDecimal;

public record PietanzaResponseDTO(
        Long id,
        String nome,
        BigDecimal prezzo,
        String descrizione,
        String foto,
        Long menuId,
        TipoPietanza tipoPietanza
) {}