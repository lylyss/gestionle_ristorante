package gestione.ristorante.Gestionale.controller;

import gestione.ristorante.Gestionale.payloads.MenuRequestDTO;
import gestione.ristorante.Gestionale.payloads.MenuResponseDTO;
import gestione.ristorante.Gestionale.services.MenuService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menus")
public class MenuController {

    private final MenuService menuService;

    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public MenuResponseDTO createMenu(@Valid @RequestBody MenuRequestDTO request) {
        return menuService.createMenu(request);
    }

    @GetMapping("/{id}")
    public MenuResponseDTO getMenuById(@PathVariable Long id) {
        return menuService.getMenuById(id);
    }

    @GetMapping
    public List<MenuResponseDTO> getAllMenus() {
        return menuService.getAllMenus();
    }

    @PutMapping("/{id}")
    public MenuResponseDTO updateMenu(
            @PathVariable Long id,
            @Valid @RequestBody MenuRequestDTO request
    ) {
        return menuService.updateMenu(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMenu(@PathVariable Long id) {
        menuService.deleteMenu(id);
    }
}