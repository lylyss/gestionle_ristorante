package gestione.ristorante.Gestionale.payloads;

import gestione.ristorante.Gestionale.enums.Ruolo;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record UserRequest(
                          @NotBlank(message = "Il username è obbligatorio")
                          @Size(min = 3, max = 30, message = "Lo username deve avere tra 3 e 30 caratteri")
                          String username,

                          @NotBlank(message = "La password è obbligatoria")
                          @Size(min = 6, message = "La password deve avere almeno 6 caratteri")
                          String password,

                          @NotNull(message = "Il ruolo è obbligatorio")
                          Ruolo ruolo) {
}
