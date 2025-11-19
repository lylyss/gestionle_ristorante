package gestione.ristorante.Gestionale.payloads;

import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;
import java.util.List;

public record StoricoRequestDTO(
        @NotNull(message = "La data è obbligatoria")
        LocalDateTime data,

        @NotNull(message = "La lista ordini è obbligatoria")
        List<Long> ordiniIds,

        @NotNull(message = "La lista pietanze è obbligatoria")
        List<Long> pietanzeIds
) {}