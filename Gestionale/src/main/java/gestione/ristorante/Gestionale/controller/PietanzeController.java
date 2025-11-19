package gestione.ristorante.Gestionale.controller;

import gestione.ristorante.Gestionale.entities.MenuRestaurant;
import gestione.ristorante.Gestionale.entities.Pietanza;
import gestione.ristorante.Gestionale.payloads.PietanzaRequestDTO;
import gestione.ristorante.Gestionale.payloads.PietanzaResponseDTO;
import gestione.ristorante.Gestionale.repositories.PietanzaRepository;
import gestione.ristorante.Gestionale.services.PietanzeService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pietanze")
public class PietanzeController {

    private final PietanzeService pietanzeService;

    public PietanzeController(PietanzeService pietanzeService) {
        this.pietanzeService = pietanzeService;
    }

    // ===== CREATE =====
    @PostMapping
    public PietanzaResponseDTO createPietanza(@Valid @RequestBody PietanzaRequestDTO request) {
        Pietanza pietanza = pietanzeService.createPietanza(request);
        return mapToDTO(pietanza);
    }

    // ===== GET BY ID =====
    @GetMapping("/{id}")
    public PietanzaResponseDTO getPietanzaById(@PathVariable Long id) {
        Pietanza pietanza = pietanzeService.getPietanzaById(id);
        return mapToDTO(pietanza);
    }

    // ===== GET ALL =====
    @GetMapping
    public List<PietanzaResponseDTO> getAllPietanze() {
        return pietanzeService.getAllPietanze()
                .stream()
                .map(this::mapToDTO)
                .toList();
    }

    // ===== UPDATE =====
    @PutMapping("/{id}")
    public PietanzaResponseDTO updatePietanza(
            @PathVariable Long id,
            @Valid @RequestBody PietanzaRequestDTO request) {
        Pietanza updated = pietanzeService.updatePietanza(id, request);
        return mapToDTO(updated);
    }

    // ===== DELETE =====
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePietanza(@PathVariable Long id) {
        pietanzeService.deletePietanza(id);
    }

    // ===== AGGIUNGI PIETANZE AL MENU =====
    @PostMapping("/menu/{menuId}")
    @ResponseStatus(HttpStatus.OK)
    public void aggiungiPietanzeAlMenu(
            @PathVariable Long menuId,
            @RequestBody List<Long> pietanzeIds) {

        pietanzeService.aggiungiPietanzeAlMenu(menuId, pietanzeIds);
    }

    // ===== METODO PRIVATO PER DTO =====
    private PietanzaResponseDTO mapToDTO(Pietanza pietanza) {
        return new PietanzaResponseDTO(
                pietanza.getId(),
                pietanza.getNome(),
                pietanza.getPrezzo(),
                pietanza.getDescrizione(),
                pietanza.getFoto(),
                pietanza.getMenu() != null ? pietanza.getMenu().getId() : null,
                pietanza.getTipoPietanza()
        );
    }
}
