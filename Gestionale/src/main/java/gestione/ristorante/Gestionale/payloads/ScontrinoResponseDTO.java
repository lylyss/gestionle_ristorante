package gestione.ristorante.Gestionale.payloads;

import java.time.LocalDateTime;

public record ScontrinoResponseDTO(
        Long id,
        LocalDateTime dataEmissione,
        UserResponseDTO user,
        CarrelloResponseDTO carrello
) {}