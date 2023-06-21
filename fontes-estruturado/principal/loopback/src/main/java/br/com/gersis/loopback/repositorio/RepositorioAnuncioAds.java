package br.com.gersis.loopback.repositorio;


import java.util.HashMap;
import java.util.Map;
import com.strongloop.android.loopback.ModelRepository;
import com.strongloop.android.loopback.callbacks.JsonArrayParser;
import com.strongloop.android.loopback.callbacks.JsonObjectParser;
import com.strongloop.android.loopback.callbacks.EmptyResponseParser;
import com.strongloop.android.loopback.callbacks.ListCallback;
import com.strongloop.android.loopback.callbacks.ObjectCallback;
import com.strongloop.android.loopback.callbacks.VoidCallback;
import com.strongloop.android.remoting.adapters.RestContractItem;

import br.com.gersis.loopback.modelo.AnuncioAds;

public class RepositorioAnuncioAds extends ModelRepository<AnuncioAds> {

	public RepositorioAnuncioAds() {
		super("AnuncioAds", AnuncioAds.class);
	}
	@Override
	protected String verificaNomeUrl(String nome) {
		return "AnuncioAds";
	}


	// ***  Operações  ***


}
