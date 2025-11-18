package gestione.ristorante.Gestionale.payloads;

import java.util.List;

public record CarrelloResponseDTO(
        Long id,
        List<OrdineResponseDTO> ordini
) {}