package gestione.ristorante.Gestionale.payloads;

import jakarta.validation.constraints.NotEmpty;

import java.util.List;

public record MenuRequestDTO(
        List<Long> pietanzeIds

) {}