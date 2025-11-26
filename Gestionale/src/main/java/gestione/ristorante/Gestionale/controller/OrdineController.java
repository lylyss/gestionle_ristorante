package gestione.ristorante.Gestionale.controller;


import gestione.ristorante.Gestionale.payloads.OrdineRequestDTO;
import gestione.ristorante.Gestionale.payloads.OrdineResponseDTO;
import gestione.ristorante.Gestionale.services.OrdineMapper;
import gestione.ristorante.Gestionale.services.OrdineService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api/ordini")
public class OrdineController {

    @Autowired
    private OrdineService ordineService;

    @Autowired
    private OrdineMapper ordineMapper;


    @PostMapping
    public OrdineResponseDTO createOrdine(@RequestBody OrdineRequestDTO ordineRequest) {
        return ordineService.createOrdine(ordineRequest);
    }


    @GetMapping("/{id}")
    public OrdineResponseDTO getOrdineById(@PathVariable Long id) {
        return ordineService.getOrdineById(id);
    }


    @GetMapping
    public Set<OrdineResponseDTO> getAllOrdini() {
        return ordineService.getAllOrdini();
    }


    @DeleteMapping("/{id}")
    public void deleteOrdine(@PathVariable Long id) {
        ordineService.deleteOrdine(id);
    }
}
