package gestione.ristorante.Gestionale.payloads;

import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;

public record TavoloRequestDTO(
        @Positive(message = "Il numero di clienti deve essere positivo")
        int numeroclienti,

        @PositiveOrZero(message = "Il totale deve essere >= 0")
        int totale
) {}