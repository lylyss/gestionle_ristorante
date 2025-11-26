package gestione.ristorante.Gestionale.services;


import gestione.ristorante.Gestionale.entities.Tavolo;
import gestione.ristorante.Gestionale.payloads.TavoloRequestDTO;
import gestione.ristorante.Gestionale.repositories.TavoloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TavoloService {

    private final TavoloRepository tavoloRepository;

    @Autowired
    public TavoloService(TavoloRepository tavoloRepository) {
        this.tavoloRepository = tavoloRepository;
    }

    // CREATE
    @Transactional
    public Tavolo createTavolo(TavoloRequestDTO tavoloRequestDTO) {
        Tavolo tavolo = new Tavolo(tavoloRequestDTO.numeroclienti(), tavoloRequestDTO.totale());
        return tavoloRepository.save(tavolo);
    }

    // READ
    public List<Tavolo> getAllTavoli() {
        return tavoloRepository.findAll();
    }

    public Optional<Tavolo> getTavoloById(Long id) {
        return tavoloRepository.findById(id);
    }

    // UPDATE
    @Transactional
    public Tavolo updateTavolo(Long id, TavoloRequestDTO tavoloRequestDTO) {
        Tavolo tavolo = tavoloRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Tavolo non trovato"));
        tavolo.setNumeroclienti(tavoloRequestDTO.numeroclienti());
        tavolo.setTotale(tavoloRequestDTO.totale());
        return tavoloRepository.save(tavolo);
    }

    // DELETE
    @Transactional
    public void deleteTavolo(Long id) {
        Tavolo tavolo = tavoloRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Tavolo non trovato"));
        tavoloRepository.delete(tavolo);
    }
}
