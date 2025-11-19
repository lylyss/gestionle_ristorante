package gestione.ristorante.Gestionale.services;

import gestione.ristorante.Gestionale.entities.MenuRestaurant;
import gestione.ristorante.Gestionale.entities.Pietanza;
import gestione.ristorante.Gestionale.payloads.PietanzaRequestDTO;
import gestione.ristorante.Gestionale.repositories.MenuRepository;
import gestione.ristorante.Gestionale.repositories.PietanzaRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PietanzeService {

    @Autowired
    private PietanzaRepository pietanzaRepository;

    @Autowired
    private MenuRepository menuRepository;

    // CREATE: crea una pietanza senza associare il menu
    public Pietanza createPietanza(PietanzaRequestDTO request) {
        Pietanza pietanza = new Pietanza();
        pietanza.setNome(request.nome());
        pietanza.setPrezzo(request.prezzo());
        pietanza.setDescrizione(request.descrizione());
        pietanza.setFoto(request.foto());
        pietanza.setTipoPietanza(request.tipoPietanza());

        // Menu rimane null fino a quando non viene aggiunta al menu
        return pietanzaRepository.save(pietanza);
    }

    // GET BY ID
    public Pietanza getPietanzaById(Long id) {
        return pietanzaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pietanza con ID " + id + " non trovata"));
    }

    // GET ALL
    public List<Pietanza> getAllPietanze() {
        return pietanzaRepository.findAll();
    }

    public Pietanza updatePietanza(Long id, PietanzaRequestDTO request) {

        Pietanza existing = pietanzaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pietanza con ID " + id + " non trovata"));

        existing.setNome(request.nome());
        existing.setPrezzo(request.prezzo());
        existing.setDescrizione(request.descrizione());
        existing.setFoto(request.foto());
        existing.setTipoPietanza(request.tipoPietanza());

        // Aggiorna il menu solo se passato
        if(request.menuId() != null) {
            MenuRestaurant menu = menuRepository.findById(request.menuId())
                    .orElseThrow(() -> new RuntimeException("Menu con ID " + request.menuId() + " non trovato"));
            existing.setMenu(menu);
        }

        return pietanzaRepository.save(existing);
    }

    // DELETE
    public void deletePietanza(Long id) {
        if (!pietanzaRepository.existsById(id)) {
            throw new RuntimeException("Pietanza con ID " + id + " non trovata");
        }
        pietanzaRepository.deleteById(id);
    }

    // Associa una lista di pietanze a un menu esistente
    @Transactional
    public void aggiungiPietanzeAlMenu(Long menuId, List<Long> pietanzeIds) {
        MenuRestaurant menu = menuRepository.findById(menuId)
                .orElseThrow(() -> new RuntimeException("Menu con ID " + menuId + " non trovato"));

        List<Pietanza> pietanze = pietanzaRepository.findAllById(pietanzeIds);

        for (Pietanza p : pietanze) {
            p.setMenu(menu);
        }

        pietanzaRepository.saveAll(pietanze);
    }
}
