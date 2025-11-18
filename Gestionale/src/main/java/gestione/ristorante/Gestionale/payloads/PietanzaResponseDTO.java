package gestione.ristorante.Gestionale.payloads;

import java.math.BigDecimal;

public record PietanzaResponseDTO(
        Long id,
        String nome,
        BigDecimal prezzo,
        String descrizione,
        String foto,
        Long menuId
) {}