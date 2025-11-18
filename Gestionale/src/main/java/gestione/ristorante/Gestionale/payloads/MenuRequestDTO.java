package gestione.ristorante.Gestionale.payloads;

import jakarta.validation.constraints.NotEmpty;

import java.util.List;

public record MenuRequestDTO(
        @NotEmpty(message = "Il menù deve contenere almeno una pietanza")
        List<Long> pietanzeIds
) {}