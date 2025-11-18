package gestione.ristorante.Gestionale.payloads;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;

public record PietanzaRequestDTO(
        @NotBlank(message = "Il nome è obbligatorio")
        @Size(min = 2, max = 50, message = "Il nome deve avere tra 2 e 50 caratteri")
        String nome,

        @NotNull(message = "Il prezzo è obbligatorio")
        @Positive(message = "Il prezzo deve essere positivo")
        BigDecimal prezzo,

        @NotBlank(message = "La descrizione è obbligatoria")
        @Size(min = 5, max = 200, message = "La descrizione deve avere tra 5 e 200 caratteri")
        String descrizione,

        @NotBlank(message = "La foto della pietanza è obbligatoria")
        String foto,

        @NotNull(message = "L'id del menù è obbligatorio")
        Long menuId
) {}