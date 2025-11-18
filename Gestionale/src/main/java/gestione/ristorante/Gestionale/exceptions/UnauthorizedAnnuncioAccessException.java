package gestione.ristorante.Gestionale.exceptions;

public class UnauthorizedAnnuncioAccessException extends RuntimeException {
    public UnauthorizedAnnuncioAccessException(String message) {
        super(message);
    }
}
