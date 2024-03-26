package gerador.geraimagemconteudoproduto.passo.impl;


import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.SecureRandom;
import java.util.List;
import java.util.Properties;

import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;

import br.com.gersis.loopback.modelo.ImagemConteudo;
import br.com.gersis.loopback.modelo.ImagemPaginaVenda;
import gerador.geraimagemconteudoproduto.passo.ImagemConteudo_RegistraImagem;



public class ImagemConteudo_RegistraImagemImpl extends ImagemConteudo_RegistraImagem {

	@Override
	protected boolean executaCustom(ImagemConteudo imagemNova) {
		this.imagem = imagemNova;
		return true;
	}

	
	
}

