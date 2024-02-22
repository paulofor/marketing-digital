package gerador.criaaudiolegendavsl.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private VideoVsl videoCorrente;


	public void setVideoCorrente(VideoVsl valor) { 
		this.videoCorrente = valor;
	}
	public VideoVsl getVideoCorrente() { 
		return this.videoCorrente;
	}
}
