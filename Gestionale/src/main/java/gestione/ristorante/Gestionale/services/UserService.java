package gestione.ristorante.Gestionale.services;

import gestione.ristorante.Gestionale.entities.User;
import gestione.ristorante.Gestionale.exceptions.BadRequestException;
import gestione.ristorante.Gestionale.exceptions.NotFoundException;
import gestione.ristorante.Gestionale.payloads.UserRequest;
import gestione.ristorante.Gestionale.payloads.UserResponseDTO;
import gestione.ristorante.Gestionale.repositories.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public UserResponseDTO createUser(UserRequest request) {
        if (userRepository.existsByUsername(request.username())) {
            throw new BadRequestException("Username già esistente!");
        }

        String hashedPassword = passwordEncoder.encode(request.password());
        User user = new User(request.username(), hashedPassword, request.ruolo());
        User saved = userRepository.save(user);

        return mapToDTO(saved);
    }

    public UserResponseDTO getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(id.intValue()));
        return mapToDTO(user);
    }

    public List<UserResponseDTO> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(this::mapToDTO)
                .toList();
    }

    public UserResponseDTO updateUser(Long id, UserRequest request) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(id.intValue()));

        if (!user.getUsername().equals(request.username()) && userRepository.existsByUsername(request.username())) {
            throw new BadRequestException("Username già esistente!");
        }

        user.setUsername(request.username());
        user.setPassword(passwordEncoder.encode(request.password()));
        user.setRuolo(request.ruolo());

        User updated = userRepository.save(user);
        return mapToDTO(updated);
    }

    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new NotFoundException(id.intValue());
        }
        userRepository.deleteById(id);
    }

    private UserResponseDTO mapToDTO(User user) {
        return new UserResponseDTO(user.getId(), user.getUsername(), user.getRuolo());
    } // serve per convertire l'entità User in un DTO UserResponseDTO per renderla pù sicura e non esporre dati sensibili come la password.
}