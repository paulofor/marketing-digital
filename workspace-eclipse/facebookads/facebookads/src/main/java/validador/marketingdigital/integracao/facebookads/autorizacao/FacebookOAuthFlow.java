package validador.marketingdigital.integracao.facebookads.autorizacao;
import java.util.Scanner;

import com.restfb.DefaultFacebookClient;
import com.restfb.FacebookClient;
import com.restfb.Version;
import com.restfb.scope.FacebookPermissions;
import com.restfb.scope.ScopeBuilder;
import com.restfb.types.User;

public class FacebookOAuthFlow {
    public static void main(String[] args) {
    	
        String appId = "364886200279300"; // Substitua pelo seu App ID
        String appSecret = "3a859efdce03e46d1564b937a7808232"; // Substitua pelo seu App Secret
        String redirectUri = "http://tyche.ovh:23101/admin/"; // Substitua pela sua URL de redirecionamento

        ScopeBuilder scopeBuilder = new ScopeBuilder();
        scopeBuilder.addPermission(FacebookPermissions.EMAIL); // Adicione as permissões necessárias

        String loginDialogUrl = "https://www.facebook.com/v12.0/dialog/oauth?client_id=" + appId +
                "&redirect_uri=" + redirectUri +
                "&scope=" + scopeBuilder.toString();

        System.out.println("Por favor, faça login no Facebook e conceda as permissões necessárias:");
        System.out.println(loginDialogUrl);
        System.out.println("Digite o código de autorização obtido:");

        Scanner scanner = new Scanner(System.in);
        String authorizationCode = scanner.nextLine();

        FacebookClient.AccessToken accessToken = new DefaultFacebookClient(Version.LATEST)
                .obtainUserAccessToken(appId, appSecret, redirectUri, authorizationCode);

        String userAccessToken = accessToken.getAccessToken();
        System.out.println("Token de Acesso do Usuário: " + userAccessToken);

        // Use o token de acesso para fazer chamadas à API do Facebook

        // Exemplo: Obter informações do usuário
        FacebookClient facebookClient = new DefaultFacebookClient(userAccessToken, Version.LATEST);
        User user = facebookClient.fetchObject("me", User.class);
        System.out.println("ID do Usuário: " + user.getId());
        System.out.println("Nome do Usuário: " + user.getName());
        System.out.println("Email do Usuário: " + user.getEmail());
    }
}
