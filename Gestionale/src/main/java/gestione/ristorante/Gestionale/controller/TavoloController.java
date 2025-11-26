package gestione.ristorante.Gestionale.controller;


import gestione.ristorante.Gestionale.entities.Ordine;
import gestione.ristorante.Gestionale.entities.Tavolo;
import gestione.ristorante.Gestionale.payloads.OrdineResponseDTO;
import gestione.ristorante.Gestionale.payloads.PietanzaResponseDTO;
import gestione.ristorante.Gestionale.payloads.TavoloRequestDTO;
import gestione.ristorante.Gestionale.payloads.TavoloResponseDTO;
import gestione.ristorante.Gestionale.services.OrdineMapper;
import gestione.ristorante.Gestionale.services.TavoloService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


import java.util.List;

import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/tavoli")
public class TavoloController {

    private final TavoloService tavoloService;
    private final OrdineMapper ordineMapper;

    @Autowired
    public TavoloController(TavoloService tavoloService, OrdineMapper ordineMapper) {
        this.tavoloService = tavoloService;
        this.ordineMapper = ordineMapper;
    }

    // CREATE
    @PostMapping
    public TavoloResponseDTO createTavolo(@RequestBody @Valid TavoloRequestDTO tavoloRequestDTO) {
        Tavolo tavolo = tavoloService.createTavolo(tavoloRequestDTO);
        return new TavoloResponseDTO(tavolo.getId(), tavolo.getNumeroclienti(), tavolo.getTotale(), mapOrdini(tavolo.getOrdini()));
    }

    // READ ALL
    @GetMapping
    public List<TavoloResponseDTO> getAllTavoli() {
        List<Tavolo> tavoli = tavoloService.getAllTavoli();
        return tavoli.stream()
                .map(tavolo -> new TavoloResponseDTO(tavolo.getId(), tavolo.getNumeroclienti(), tavolo.getTotale(), mapOrdini(tavolo.getOrdini())))
                .collect(Collectors.toList());
    }

    // READ by ID
    @GetMapping("/{id}")
    public TavoloResponseDTO getTavoloById(@PathVariable Long id) {
        Tavolo tavolo = tavoloService.getTavoloById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Tavolo non trovato"));
        return new TavoloResponseDTO(tavolo.getId(), tavolo.getNumeroclienti(), tavolo.getTotale(), mapOrdini(tavolo.getOrdini()));
    }

    // UPDATE
    @PutMapping("/{id}")
    public TavoloResponseDTO updateTavolo(@PathVariable Long id, @RequestBody @Valid TavoloRequestDTO tavoloRequestDTO) {
        Tavolo tavolo = tavoloService.updateTavolo(id, tavoloRequestDTO);
        return new TavoloResponseDTO(tavolo.getId(), tavolo.getNumeroclienti(), tavolo.getTotale(), mapOrdini(tavolo.getOrdini()));
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void deleteTavolo(@PathVariable Long id) {
        tavoloService.deleteTavolo(id);
    }

    private List<OrdineResponseDTO> mapOrdini(List<Ordine> ordini) {
        return ordini.stream()
                .map(ordineMapper::mapOrdine)
                .collect(Collectors.toList());
    }
}
