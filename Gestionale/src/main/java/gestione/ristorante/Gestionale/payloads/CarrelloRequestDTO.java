package gestione.ristorante.Gestionale.payloads;

import jakarta.validation.constraints.NotEmpty;

import java.util.List;

public record CarrelloRequestDTO(
        @NotEmpty(message = "Il carrello deve contenere almeno un ordine")
        List<Long> ordiniIds
) {}
