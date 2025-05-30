(function(global){var Language = {};

Language.pluralFormFunction = function (n) {
		if (n >= 0 && n < 2) {
			return 'one';
		}

		return 'other';
	};


Language.bubble = Language.bubble || {};

Language.bubble.attention_grabber = {
	"message": "Elemento de destaque do chat"
};


Language.chat = Language.chat || {};

Language.chat.Warning = {
	"message": "Atenção"
};
Language.chat.accept_call = {
	"message": "Aceitar"
};
Language.chat.active = {
	"message": "Ativo"
};
Language.chat.agent_profile_image = {
	"message": "Imagem de perfil do agente"
};
Language.chat.agent_ringing = {
	"message": "Chamada recebida"
};
Language.chat.all_conversations = {
	"message": "Visualizar todas as conversas"
};
Language.chat.call_end_details = {
	"message": "Começou às #startedOn e durou #duration",
	"vars": [
		"startedOn",
		"duration"
	]
};
Language.chat.call_error_load = {
	"message": "Não é possível carregar os detalhes da chamada."
};
Language.chat.call_started_on = {
	"message": "Começou às #startedOn",
	"vars": [
		"startedOn"
	]
};
Language.chat.chatEnded = {
	"message": "Seu chat foi encerrado"
};
Language.chat.chat_icon = {
	"message": "Ícone do chat"
};
Language.chat.chat_qm = {
	"message": "Abrir chat?"
};
Language.chat.chat_text = {
	"message": "Chat"
};
Language.chat.close_icon = {
	"message": "Ícone para fechar"
};
Language.chat.completed_call = {
	"message": "Chamada encerrada"
};
Language.chat.conversation_ended_on = {
	"message": "A conversa terminou em"
};
Language.chat.decline_call = {
	"message": "Recusar"
};
Language.chat.defaultName = {
	"message": "Você (alterar nome)"
};
Language.chat.departmentIsAway = {
	"message": "O departamento #strongStart #departmentName #strongEnd não está disponível no momento.",
	"vars": [
		"departmentName",
		"strongStart",
		"strongEnd"
	]
};
Language.chat.departmentIsOffline = {
	"message": "O departamento #strongStart #departmentName #strongEnd não está disponível no momento. Você será atendido por outro departamento.",
	"vars": [
		"departmentName",
		"strongStart",
		"strongEnd"
	]
};
Language.chat.download = {
	"message": "Fazer download"
};
Language.chat.downloadFile = {
	"message": "Fazer download do arquivo"
};
Language.chat.dragDropText = {
	"message": "Solte os arquivos aqui para fazer upload"
};
Language.chat.emoji_error_load = {
	"message": "Não foi possível carregar os emojis"
};
Language.chat.error_title = {
	"message": "Erro"
};
Language.chat.failed = {
	"message": "Falhou"
};
Language.chat.generalUploadError = {
	"message": "\"#fileName\", por favor, tente novamente.",
	"vars": [
		"fileName"
	]
};
Language.chat.generalUploadErrorLabel = {
	"message": "Não foi possível fazer upload do arquivo"
};
Language.chat.goToLatest = {
	"message": "Ir para o mais recente"
};
Language.chat.hideButton = {
	"message": "Ocultar chat"
};
Language.chat.incoming_call_message = {
	"message": "Recebendo chamada de #name",
	"vars": [
		"name"
	]
};
Language.chat.insert_emoji = {
	"message": "Inserir emoji"
};
Language.chat.justNow = {
	"message": "agora mesmo"
};
Language.chat.limit2 = {
	"message": "O tamanho máximo de arquivo para dispositivos móveis é de 2MB. Faça upload de um arquivo menor."
};
Language.chat.limit50 = {
	"message": "O tamanho máximo de arquivo é de 50MB. Faça upload de um arquivo menor."
};
Language.chat.message_not_delivered = {
	"message": "Mensagem não entregue, clique aqui para reenviar."
};
Language.chat.message_too_long = {
	"message": "A mensagem pode ter até 5 mil caracteres."
};
Language.chat.missed_agent = {
	"message": "Sua chamada não foi atendida"
};
Language.chat.missed_visitor = {
	"message": "Você perdeu uma chamada."
};
Language.chat.missed_visitor_messagePreview = {
	"message": "Chamada perdida de"
};
Language.chat.mobileName = {
	"message": "Você"
};
Language.chat.newChat = {
	"message": "Iniciar novo chat"
};
Language.chat.newMessages = {
	"message": "Novas mensagens"
};
Language.chat.new_conversation = {
	"message": "Nova conversa"
};
Language.chat.notificationTitle = {
	"message": "notificação"
};
Language.chat.ongoing_call = {
	"message": "Chamada em andamento"
};
Language.chat.past = {
	"message": "#time atrás",
	"vars": [
		"time"
	]
};
Language.chat.pasted_image_title = {
	"message": "Imagem colada em #dateTime",
	"vars": [
		"dateTime"
	]
};
Language.chat.profile_prechat_text = {
	"message": "Preencha o formulário abaixo para iniciar nosso chat."
};
Language.chat.rejected_call = {
	"message": "Você rejeitou a chamada."
};
Language.chat.remove_rate = {
	"message": "Você removeu sua avaliação da conversa"
};
Language.chat.resend = {
	"message": "Reenviar"
};
Language.chat.retry = {
	"message": "Tentar novamente."
};
Language.chat.return_to_live_chat = {
	"message": "Voltar ao chat ao vivo"
};
Language.chat.say_something = {
	"message": "Escrever uma resposta.."
};
Language.chat.screen_share_error = {
	"message": "O compartilhamento de tela não está disponível."
};
Language.chat.send_mail = {
	"message": "Enviar mensagem"
};
Language.chat.sent_file = {
	"message": "Enviar arquivo"
};
Language.chat.today_time = {
	"message": "Hoje, às #time",
	"vars": [
		"time"
	]
};
Language.chat.tryAgain = {
	"message": "Tentar novamente."
};
Language.chat.unanswered = {
	"message": "Não respondida"
};
Language.chat.uploading = {
	"message": "Carregando…"
};
Language.chat.video_call_error = {
	"message": "A chamada de vídeo não está disponível."
};
Language.chat.visitor_ringing = {
	"message": "Chamando…"
};
Language.chat.voice_call_error = {
	"message": "A chamada de voz não está disponível."
};
Language.chat.we_are_live = {
	"message": "Estamos prontos para conversar com você agora. Escreva algo para iniciar um chat em tempo real."
};


Language.days = Language.days || {};

Language.days['0'] = {
	"message": "Domingo"
};
Language.days['1'] = {
	"message": "Segunda"
};
Language.days['2'] = {
	"message": "Terça"
};
Language.days['3'] = {
	"message": "Quarta"
};
Language.days['4'] = {
	"message": "Quinta"
};
Language.days['5'] = {
	"message": "Sexta"
};
Language.days['6'] = {
	"message": "Sábado"
};


Language.form = Language.form || {};

Language.form.CancelButton = {
	"message": "Cancelar"
};
Language.form.CloseButton = {
	"message": "Fechar"
};
Language.form.DepartmentsErrorMessage = {
	"message": "O departamento é obrigatório."
};
Language.form.DepartmentsPlaceholder = {
	"message": "selecionar departamento..."
};
Language.form.EmailErrorMessage = {
	"message": "Endereço de e-mail inválido."
};
Language.form.EmailPlaceholder = {
	"message": "Endereço de e-mail"
};
Language.form.EmailTranscriptFormMessage = {
	"message": "Preencha o formulário abaixo para receber uma cópia desta conversa em seu e-mail."
};
Language.form.EmailTranscriptSuccess = {
	"message": "Solicitação de cópia enviada."
};
Language.form.EmailTranscriptTo = {
	"message": "Enviar transcrição por e-mail para"
};
Language.form.EndChatMessage = {
	"message": "Agradecemos seu contato. Sempre que desejar, inicie uma nova sessão de chat ou insira seu e-mail para receber uma cópia desta conversa."
};
Language.form.EndChatMessage2 = {
	"message": "Agradecemos seu contato. Sempre que desejar, inicie uma nova sessão de chat."
};
Language.form.EndChatTitle = {
	"message": "Tem certeza de que deseja encerrar este chat?"
};
Language.form.MessagePlaceholder = {
	"message": "sua mensagem..."
};
Language.form.NameErrorMessage = {
	"message": "Insira um nome válido."
};
Language.form.NameFormMessage = {
	"message": "Altere seu nome para podermos reconhecer você da próxima vez."
};
Language.form.OfflineFormMessage = {
	"message": "Preencha o formulário abaixo e retornaremos seu contato assim que possível."
};
Language.form.OfflineMessageNotSent = {
	"message": "Sua mensagem não foi enviada. Tente novamente."
};
Language.form.OfflineMessageSent = {
	"message": "Sua mensagem foi enviada com sucesso!"
};
Language.form.PhoneErrorMessage = {
	"message": "Número de telefone inválido"
};
Language.form.PreChatFormMessage = {
	"message": "Preencha o formulário abaixo para iniciar o chat com o próximo agente disponível."
};
Language.form.PreChatFormMessageProfile = {
	"message": "Preencha o formulário abaixo para iniciarmos nosso chat!"
};
Language.form.QuestionPlaceholder = {
	"message": "sua pergunta…"
};
Language.form.RequiredErrorMessage = {
	"message": "Este campo é obrigatório"
};
Language.form.SaveButton = {
	"message": "Salvar"
};
Language.form.SendButton = {
	"message": "Enviar"
};
Language.form.SendMessage = {
	"message": "Enviar mensagem"
};
Language.form.StartChatButton = {
	"message": "Iniciar chat"
};
Language.form.SubmitButton = {
	"message": "Enviar"
};
Language.form.SubmittedFrom = {
	"message": "Formulário enviado"
};
Language.form.SubmittingProcess = {
	"message": "Enviando"
};
Language.form.TranscriptMessage = {
	"message": "Se desejar, insira seu endereço de e-mail para receber uma cópia desta conversa."
};
Language.form.any = {
	"message": "Todos"
};
Language.form.chatEnded = {
	"message": "Seu chat foi encerrado"
};
Language.form.department = {
	"message": "Departamento"
};
Language.form.email = {
	"message": "E-mail"
};
Language.form.errorSaving = {
	"message": "Erro ao salvar. Tente novamente."
};
Language.form.message = {
	"message": "Mensagem"
};
Language.form.name = {
	"message": "Nome"
};
Language.form.sendAgain = {
	"message": "Enviar novamente"
};
Language.form.visitButton = {
	"message": "Acesse tawk.to"
};


Language.home = Language.home || {};

Language.home.banner_image = {
	"message": "Imagem do banner"
};
Language.home.chat_button = {
	"message": "Nova conversa"
};
Language.home.chat_input = {
	"message": "Digite aqui e pressione Enter."
};
Language.home.heading_main = {
	"message": "Olá, 👋"
};
Language.home.heading_sub = {
	"message": "Precisa de ajuda? Visite nossa Central de Ajuda ou entre em contato pelo chat:"
};
Language.home.kb_search = {
	"message": "Pesquisar respostas"
};
Language.home.logo_image = {
	"message": "Imagem do logotipo"
};


Language.kb = Language.kb || {};

Language.kb.article_image = {
	"message": "Imagem do artigo"
};
Language.kb.article_rating = {
	"message": "Este artigo foi útil?"
};
Language.kb.article_rating_count = {
	"message": "#totalLikes de #totalVotes curtiram este artigo",
	"vars": [
		"totalLikes",
		"totalVotes"
	]
};
Language.kb.author_profile_image = {
	"message": "Imagem de perfil do autor"
};
Language.kb.clear_search = {
	"message": "Limpar pesquisa"
};
Language.kb.downvote_rating_button = {
	"message": "Não"
};
Language.kb.help_center = {
	"message": "Central de Ajuda"
};
Language.kb.negative_rating = {
	"message": "Negativo"
};
Language.kb.positive_rating = {
	"message": "Positivo"
};
Language.kb.recent_searches = {
	"message": "Pesquisas recentes"
};
Language.kb.search_fail_description = {
	"message": "Tente novamente"
};
Language.kb.search_fail_title = {
	"message": "Nenhum resultado encontrado"
};
Language.kb.search_placeholder = {
	"message": "Pesquisar respostas"
};
Language.kb.search_results = {
	"message": "Resultados da pesquisa"
};
Language.kb.show_all_results = {
	"message": "Exibir todos os resultados (#num)",
	"vars": [
		"num"
	]
};
Language.kb.submit_search = {
	"message": "Pesquisar"
};
Language.kb.upvote_rating_button = {
	"message": "Sim"
};
Language.kb.view_full = {
	"message": "Exibir em tela inteira"
};


Language.menu = Language.menu || {};

Language.menu.add_chat_to_your_website = {
	"message": "Adicione chat ao seu site"
};
Language.menu.change_name = {
	"message": "Alterar nome"
};
Language.menu.email_transcript = {
	"message": "Enviar transcrição por e-mail"
};
Language.menu.end_chat_session = {
	"message": "Encerrar esta sessão de chat"
};
Language.menu.popout_widget = {
	"message": "Widget pop-up"
};
Language.menu.sound_off = {
	"message": "Áudio desligado"
};
Language.menu.sound_on = {
	"message": "Som ligado"
};


Language.months = Language.months || {};

Language.months['0'] = {
	"message": "Janeiro"
};
Language.months['1'] = {
	"message": "Fevereiro"
};
Language.months['10'] = {
	"message": "Novembro"
};
Language.months['11'] = {
	"message": "Dezembro"
};
Language.months['2'] = {
	"message": "Março"
};
Language.months['3'] = {
	"message": "Abril"
};
Language.months['4'] = {
	"message": "Maio"
};
Language.months['5'] = {
	"message": "Junho"
};
Language.months['6'] = {
	"message": "Julho"
};
Language.months['7'] = {
	"message": "Agosto"
};
Language.months['8'] = {
	"message": "Setembro"
};
Language.months['9'] = {
	"message": "Outubro"
};


Language.notifications = Language.notifications || {};

Language.notifications.dismiss_alert = {
	"message": "Ignorar alerta"
};
Language.notifications.maximum_file_upload_warning = {
	"message": "O número máximo de arquivos para transferência é de #limitFileNumber por vez. Tente novamente com o(s) arquivo(s) a seguir:",
	"vars": [
		"limitFileNumber"
	]
};
Language.notifications.maximum_size_upload_warning = {
	"message": "O tamanho máximo de arquivo para transferência é de #limitFileSize por arquivo. Tente compactar o(s) seguinte(s) arquivo(s) e tente novamente.",
	"vars": [
		"limitFileSize"
	]
};
Language.notifications.reconnecting = {
	"message": "Reconectando"
};
Language.notifications.retry = {
	"message": "Tentar novamente"
};


Language.overlay = Language.overlay || {};

Language.overlay.cookiesOff = {
	"message": "O chat não está funcionando, porque a função de cookies do seu navegador está desabilitada. Habilite-a e atualize seu navegador."
};
Language.overlay.inactive = {
	"message": "Clique aqui para reiniciar o chat"
};
Language.overlay.maintenance = {
	"message": "O chat está em manutenção."
};
Language.overlay.tawkContent = {
	"message": "Este widget é desenvolvido por tawk.to — um aplicativo gratuito de mensagens que permite monitorar e interagir com os visitantes do seu site."
};


Language.rollover = Language.rollover || {};

Language.rollover.back = {
	"message": "Voltar"
};
Language.rollover.chatMenu = {
	"message": "Menu"
};
Language.rollover.emailTranscriptOption = {
	"message": "Enviar cópia do chat por e-mail"
};
Language.rollover.end = {
	"message": "Encerrar o chat"
};
Language.rollover.knowledgeBase = {
	"message": "Base de conhecimento"
};
Language.rollover.maximize = {
	"message": "Maximizar"
};
Language.rollover.minimize = {
	"message": "Minimizar"
};
Language.rollover.negativeRating = {
	"message": "Avalie esta conversa com -1"
};
Language.rollover.popOut = {
	"message": "Abrir em uma nova janela"
};
Language.rollover.positiveRating = {
	"message": "Avalie esta conversa com +1"
};
Language.rollover.rateChat = {
	"message": "Avalie este chat"
};
Language.rollover.resendMessage = {
	"message": "Reenviar mensagem"
};
Language.rollover.resize = {
	"message": "Redefinir tamanho"
};
Language.rollover.screenShare = {
	"message": "Compartilhamento de tela"
};
Language.rollover.uploadFile = {
	"message": "Fazer upload de arquivo"
};
Language.rollover.videoCall = {
	"message": "Chamada de vídeo"
};
Language.rollover.voiceCall = {
	"message": "Chamada de voz"
};


Language.routes = Language.routes || {};

Language.routes.all_agents = {
	"message": "Todos os agentes"
};
Language.routes.conversations = {
	"message": "Conversas"
};
Language.routes.load_more = {
	"message": "Carregar mais"
};


Language.status = Language.status || {};

Language.status.away = {
	"message": "Ausente"
};
Language.status.offline = {
	"message": "Offline"
};
Language.status.online = {
	"message": "Online"
};




Language.chat = Language.chat || {};

Language.chat.hours = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num hora",
		"other": "#num horas"
	}
};
Language.chat.messageQueuedText = {
	"pluralVars": [
		"t"
	],
	"message": {
		"one": "O tempo estimado de espera é de #strongStart #t minuto #strongEnd",
		"other": "O tempo estimado de espera é de #strongStart #t minutos #strongEnd"
	},
	"vars": [
		"strongStart",
		"strongEnd"
	]
};
Language.chat.minutes = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num minuto",
		"other": "#num minutos"
	}
};
Language.chat.newMessage = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num nova mensagem",
		"other": "#num novas mensagens"
	}
};
Language.chat.seconds = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num segundo",
		"other": "#num segundos"
	}
};


global.$_Tawk.language = Language;})(window);