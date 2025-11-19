package gestione.ristorante.Gestionale.payloads;

import java.time.LocalDateTime;
import java.util.List;

public record StoricoResponseDTO(
        Long id,
        LocalDateTime data,
        List<OrdineResponseDTO> ordini,
        List<PietanzaResponseDTO> pietanze
) {}