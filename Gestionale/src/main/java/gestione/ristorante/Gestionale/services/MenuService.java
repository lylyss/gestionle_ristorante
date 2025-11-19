package gestione.ristorante.Gestionale.services;

import gestione.ristorante.Gestionale.entities.MenuRestaurant;
import gestione.ristorante.Gestionale.entities.Pietanza;
import gestione.ristorante.Gestionale.exceptions.BadRequestException;
import gestione.ristorante.Gestionale.exceptions.NotFoundException;
import gestione.ristorante.Gestionale.payloads.MenuRequestDTO;
import gestione.ristorante.Gestionale.payloads.MenuResponseDTO;
import gestione.ristorante.Gestionale.payloads.PietanzaResponseDTO;
import gestione.ristorante.Gestionale.repositories.MenuRepository;
import gestione.ristorante.Gestionale.repositories.PietanzaRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {

    private final MenuRepository menuRepository;
    private final PietanzaRepository pietanzaRepository;

    public MenuService(MenuRepository menuRepository, PietanzaRepository pietanzaRepository) {
        this.menuRepository = menuRepository;
        this.pietanzaRepository = pietanzaRepository;
    }


    public MenuResponseDTO createMenu(MenuRequestDTO request) {
        MenuRestaurant menu = new MenuRestaurant();


        if (request.pietanzeIds() != null && !request.pietanzeIds().isEmpty()) {
            List<Pietanza> pietanze = loadPietanze(request.pietanzeIds());
            menu.setPietanze(pietanze);
        }

        MenuRestaurant saved = menuRepository.save(menu);
        return mapToDTO(saved);
    }


    public MenuResponseDTO getMenuById(Long id) {
        MenuRestaurant menu = menuRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(id.intValue()));
        return mapToDTO(menu);
    }


    public List<MenuResponseDTO> getAllMenus() {
        return menuRepository.findAll().stream()
                .map(this::mapToDTO)
                .toList();
    }


    public MenuResponseDTO updateMenu(Long id, MenuRequestDTO request) {
        MenuRestaurant menu = menuRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(id.intValue()));

        if (request.pietanzeIds() != null && !request.pietanzeIds().isEmpty()) {
            List<Pietanza> pietanze = loadPietanze(request.pietanzeIds());
            menu.setPietanze(pietanze);
        }

        MenuRestaurant updated = menuRepository.save(menu);
        return mapToDTO(updated);
    }


    public void deleteMenu(Long id) {
        if (!menuRepository.existsById(id)) {
            throw new NotFoundException(id.intValue());
        }
        menuRepository.deleteById(id);
    }



    private List<Pietanza> loadPietanze(List<Long> ids) {
        List<Pietanza> pietanze = pietanzaRepository.findAllById(ids);

        if (pietanze.size() != ids.size()) {
            throw new BadRequestException("Una o più pietanze non esistono!");
        }
        return pietanze;
    }

    private MenuResponseDTO mapToDTO(MenuRestaurant menu) {
        List<PietanzaResponseDTO> dtoPietanze = menu.getPietanze().stream()
                .map(p -> new PietanzaResponseDTO(
                        p.getId(),
                        p.getNome(),
                        p.getPrezzo(),
                        p.getDescrizione(),
                        p.getFoto(),
                        menu.getId(),
                        p.getTipoPietanza()// menuId
                ))
                .toList();

        return new MenuResponseDTO(menu.getId(), dtoPietanze);
    }



}
