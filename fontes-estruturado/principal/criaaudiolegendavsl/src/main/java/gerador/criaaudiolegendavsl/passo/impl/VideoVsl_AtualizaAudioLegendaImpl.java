package gerador.criaaudiolegendavsl.passo.impl;


import br.com.gersis.loopback.modelo.VideoVsl;
import gerador.criaaudiolegendavsl.passo.*;



public class VideoVsl_AtualizaAudioLegendaImpl extends VideoVsl_AtualizaAudioLegenda {

	@Override
	protected boolean executaCustom(VideoVsl videoCorrente) {
		videoAudioLegenda = videoCorrente;
		return true;
	} 


}

