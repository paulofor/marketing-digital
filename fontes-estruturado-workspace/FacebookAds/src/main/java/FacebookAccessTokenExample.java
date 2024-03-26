import com.restfb.DefaultFacebookClient;
import com.restfb.FacebookClient;
import com.restfb.Version;
import com.restfb.types.User;

public class FacebookAccessTokenExample {
    public static void main(String[] args) {
        // Configuração inicial
        String appId = "706794444862792";
        String appSecret = "7c5867d822086d8da5c7192df9ef95eb";
        
        // Inicialização da API do Facebook
        FacebookClient facebookClient = new DefaultFacebookClient(Version.VERSION_19_0);
        
        // Autenticação do usuário e obtenção do token de acesso
        String accessToken = facebookClient.obtainAppAccessToken(appId, appSecret).getAccessToken();
        System.out.println("Token de Acesso: " + accessToken);
        
        // Você pode usar o token de acesso para fazer chamadas à API do Facebook em nome do usuário autenticado
        // Por exemplo, para obter detalhes do usuário
        //User user = facebookClient.fetchObject("me", User.class, accessToken);
        //System.out.println("Nome do usuário: " + user.getName());
    }
}

