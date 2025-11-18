package gestione.ristorante.Gestionale.payloads;

import jakarta.validation.constraints.NotNull;

public record ScontrinoRequestDTO(
        @NotNull(message = "L'id dell'utente è obbligatorio")
        Long userId,

        @NotNull(message = "L'id del carrello è obbligatorio")
        Long carrelloId
) {}