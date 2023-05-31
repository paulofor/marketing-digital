package validador.marketingdigital.integracao.daobase;

import validador.marketingdigital.integracao.daobase.comum.DaoBaseComum;

public abstract class DaoAplicacao extends DaoBaseComum {

	@Override
	protected long getTempo() {
		return 3000;
	}
}
