package validador.marketingdigital.integracao.facebookads;

import com.restfb.DefaultFacebookClient;
import com.restfb.FacebookClient;
import com.restfb.Parameter;
import com.restfb.types.User;

public class FacebookAccountCreator {
    public static void main(String[] args) {
        String accessToken = "seu_access_token"; // Substitua pelo seu token de acesso

        FacebookClient facebookClient = new DefaultFacebookClient(accessToken);

        String email = "email@example.com";
        String password = "senha";
        String firstName = "Primeiro Nome";
        String lastName = "Sobrenome";
        String birthday = "01/01/1990";

        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setBirthday(birthday);

        // Criação da conta
        User createdUser = facebookClient.publish("me/accounts", User.class,
                Parameter.with("first_name", user.getFirstName()),
                Parameter.with("last_name", user.getLastName()),
                Parameter.with("email", user.getEmail()),
                Parameter.with("password", user.getPassword()),
                Parameter.with("birthday", user.getBirthday()));

        System.out.println("Nova conta criada com ID: " + createdUser.getId());
    }
}
