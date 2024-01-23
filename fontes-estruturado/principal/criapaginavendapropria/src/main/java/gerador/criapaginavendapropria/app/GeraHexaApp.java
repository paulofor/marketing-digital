package gerador.criapaginavendapropria.app;

import java.security.SecureRandom;

public class GeraHexaApp {

	static SecureRandom random = new SecureRandom();
	
	public static void main(String[] args) {
		System.out.println(generateRandomHex());
	}

	private static String generateRandomHex() {
		// Crie um array de bytes e gera números aleatórios
		byte[] bytes = new byte[15]; // 15 bytes * 2 (um byte representa dois caracteres hexadecimais) = 30
										// caracteres hexadecimais
		random.nextBytes(bytes);

		// converte bytes para hexadecimal
		StringBuilder sb = new StringBuilder();
		for (byte b : bytes) {
			sb.append(String.format("%02x", b));
		}

		return sb.toString();
	}
}
