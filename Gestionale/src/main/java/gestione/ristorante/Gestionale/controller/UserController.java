package gestione.ristorante.Gestionale.controller;

import gestione.ristorante.Gestionale.payloads.UserRequest;
import gestione.ristorante.Gestionale.payloads.UserResponseDTO;
import gestione.ristorante.Gestionale.services.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // CREA UN UTENTE
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponseDTO createUser(@Valid @RequestBody UserRequest request) {
        return userService.createUser(request);
    }

    // RECUPERA UN UTENTE PER ID
    @GetMapping("/{id}")
    public UserResponseDTO getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    // RECUPERA TUTTI GLI UTENTI
    @GetMapping
    public List<UserResponseDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    // AGGIORNA UN UTENTE
    @PutMapping("/{id}")
    public UserResponseDTO updateUser(@PathVariable Long id,
                                      @Valid @RequestBody UserRequest request) {
        return userService.updateUser(id, request);
    }

    // ELIMINA UN UTENTE
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
