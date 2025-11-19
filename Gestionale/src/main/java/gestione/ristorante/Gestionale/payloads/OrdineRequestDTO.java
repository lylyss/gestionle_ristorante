package gestione.ristorante.Gestionale.payloads;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Set;

public record OrdineRequestDTO(
        @NotNull(message = "L'id del tavolo è obbligatorio")
        Long tavoloId,

        @NotNull(message = "Il totale è obbligatorio")
        @PositiveOrZero(message = "Il totale deve essere >= 0")
        BigDecimal totale,

        @NotNull(message = "La data e ora sono obbligatorie")
        LocalDateTime dataeora,

        @NotEmpty(message = "L'ordine deve contenere almeno una pietanza")
        Set<Long> pietanzeIds
) {}