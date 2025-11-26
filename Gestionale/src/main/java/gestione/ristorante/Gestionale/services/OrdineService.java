package gestione.ristorante.Gestionale.services;

import gestione.ristorante.Gestionale.entities.*;
import gestione.ristorante.Gestionale.payloads.OrdineRequestDTO;
import gestione.ristorante.Gestionale.payloads.OrdineResponseDTO;

import gestione.ristorante.Gestionale.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

import java.util.Set;
import java.util.stream.Collectors;



@Service
public class OrdineService {

    @Autowired
    private OrdineRepository ordineRepository;

    @Autowired
    private TavoloRepository tavoloRepository;

    @Autowired
    private CarrelloRepository carrelloRepository;

    @Autowired
    private StoricoRepository storicoRepository;

    @Autowired
    private PietanzaRepository pietanzaRepository;

    @Autowired
    private OrdineMapper ordineMapper;

    public OrdineResponseDTO createOrdine(OrdineRequestDTO ordineRequest) {
        Tavolo tavolo = tavoloRepository.findById(ordineRequest.tavoloId())
                .orElseThrow(() -> new IllegalArgumentException("Tavolo non trovato"));

        Carrello carrello = carrelloRepository.findById(ordineRequest.tavoloId())
                .orElseThrow(() -> new IllegalArgumentException("Carrello non trovato"));


        Storico storico = storicoRepository.save(new Storico());


        Set<Pietanza> pietanze = pietanzaRepository.findAllByIdIn(new ArrayList<>(ordineRequest.pietanzeIds()));

        Ordine ordine = new Ordine();
        ordine.setTavolo(tavolo);
        ordine.setCarrello(carrello);
        ordine.setStorico(storico);
        ordine.setTotale(ordineRequest.totale());
        ordine.setDataeora(ordineRequest.dataeora());
        ordine.setPietanze(pietanze);

        Ordine savedOrdine = ordineRepository.save(ordine);


        return ordineMapper.mapOrdine(savedOrdine);
    }

    public OrdineResponseDTO getOrdineById(Long id) {
        Ordine ordine = ordineRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Ordine non trovato"));


        return ordineMapper.mapOrdine(ordine);
    }

    public Set<OrdineResponseDTO> getAllOrdini() {
        return ordineRepository.findAll().stream()
                .map(ordineMapper::mapOrdine)
                .collect(Collectors.toSet());
    }

    public void deleteOrdine(Long id) {
        Ordine ordine = ordineRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Ordine non trovato"));
        ordineRepository.delete(ordine);
    }
}

