package gestione.ristorante.Gestionale.payloads;

import java.util.List;

public record MenuResponseDTO(
        Long id,
        List<PietanzaResponseDTO> pietanze
) {}