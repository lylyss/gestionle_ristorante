package gestione.ristorante.Gestionale.payloads;

import gestione.ristorante.Gestionale.enums.Ruolo;

public record UserResponseDTO(
        Long id,
        String username,
        Ruolo ruolo
) {
}
