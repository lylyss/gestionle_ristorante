package gestione.ristorante.Gestionale.payloads;

import java.util.List;

public record TavoloResponseDTO(Long id,
                                int numeroclienti,
                                int totale,
                                List<OrdineResponseDTO> ordini) {
}
