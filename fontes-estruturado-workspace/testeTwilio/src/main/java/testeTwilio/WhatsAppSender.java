package testeTwilio;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

public class WhatsAppSender {

    // Substitua pelas credenciais da sua conta Twilio
    public static final String ACCOUNT_SID = "...";
    public static final String AUTH_TOKEN = "060bd0fc4310a0917a0169e3392ae69e";

    public static void main(String[] args) {
        // Inicialize o Twilio
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

        // Substitua o número 'to' pelo número de destino do WhatsApp (deve estar registrado no Sandbox)
        String toWhatsAppNumber = "whatsapp:+5521992902732"; // Número do destinatário
        String fromWhatsAppNumber = "whatsapp:+14155238886"; // Número do Twilio Sandbox

        // Número de destino (lead), número Twilio e mensagem
        String to = "whatsapp:+5521992902732"; // Número do lead (inclua o código do país, +55 para Brasil)
        String from =  "whatsapp:+14155238886";  // Seu número Twilio
        String body = "Olá! Temos uma novidade incrível para você: nosso novo produto pode revolucionar sua rotina! Acesse nosso site para saber mais.";

        
        
        try {
            // Enviar a mensagem
            Message message = Message.creator(
                    new PhoneNumber(toWhatsAppNumber), // Destinatário
                    new PhoneNumber(fromWhatsAppNumber), // Remetente
                    body
            ).create();

            // Exibe o SID da mensagem
            System.out.println("Mensagem enviada com sucesso! SID: " + message.getSid());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
