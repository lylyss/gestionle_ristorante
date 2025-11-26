package gestione.ristorante.Gestionale.services;


import gestione.ristorante.Gestionale.entities.Ordine;
import gestione.ristorante.Gestionale.payloads.OrdineResponseDTO;
import gestione.ristorante.Gestionale.payloads.PietanzaResponseDTO;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class OrdineMapper {

    public OrdineResponseDTO mapOrdine(Ordine ordine) {
        return new OrdineResponseDTO(
                ordine.getId(),
                ordine.getTavolo().getId(),
                ordine.getTotale(),
                ordine.getDataeora(),
                ordine.getPietanze().stream()
                        .map(pietanza -> new PietanzaResponseDTO(
                                pietanza.getId(),
                                pietanza.getNome(),
                                pietanza.getPrezzo(),
                                pietanza.getDescrizione(),
                                pietanza.getFoto(),
                                pietanza.getMenu().getId(),
                                pietanza.getTipoPietanza()
                        ))
                        .collect(Collectors.toSet())
        );
    }
}
