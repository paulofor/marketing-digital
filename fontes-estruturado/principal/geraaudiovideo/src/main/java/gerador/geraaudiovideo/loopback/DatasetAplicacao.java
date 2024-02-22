package gerador.geraaudiovideo.loopback;


import br.com.gersis.daobase.IDatasetComum;
import br.com.gersis.loopback.modelo.*;
import java.util.List;

public class DatasetAplicacao  implements IDatasetComum {
	private VideoVsl videoCorrente;
	private List<TrechoVsl> listaTrecho;


	public void setVideoCorrente(VideoVsl valor) { 
		this.videoCorrente = valor;
	}
	public VideoVsl getVideoCorrente() { 
		return this.videoCorrente;
	}
	public void setListaTrecho(List<TrechoVsl> valor) { 
		this.listaTrecho = valor;
	}
	public List<TrechoVsl> getListaTrecho() { 
		return this.listaTrecho;
	}
}
