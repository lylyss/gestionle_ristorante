package gestione.ristorante.Gestionale.payloads;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Set;

public record OrdineResponseDTO(
        Long id,
        Long tavoloId,
        BigDecimal totale,
        LocalDateTime dataeora,
        Set<PietanzaResponseDTO> pietanze
) {}