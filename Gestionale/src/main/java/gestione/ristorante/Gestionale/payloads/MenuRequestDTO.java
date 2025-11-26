package gestione.ristorante.Gestionale.payloads;



import java.util.List;

public record MenuRequestDTO(
        String nome,
        List<Long> pietanzeIds

) {}