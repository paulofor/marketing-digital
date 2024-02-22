#!/bin/bash

# Define o texto para o anúncio
texto="Anúncio de eBook sobre Maquiagem para Mulheres de Classe Média e Alta"

# Divide o texto ao meio
metade_texto=$(((${#texto} + 1) / 2))
linha1="${texto:0:metade_texto}"
linha2="${texto:metade_texto}"

# Tamanho da imagem
tamanho="1200x1200"

# Cor do fundo e da fonte
fundo="lightpink"
fonte_cor="black"

# Fonte e tamanho do texto
fonte="Montserrat-Regular"
tamanho_texto="72"
kerning="2"

# Cria o comando convert com as configurações
comando="convert -size $tamanho xc:$fundo -fill $fonte_cor -font $fonte -pointsize $tamanho_texto -kerning $kerning -gravity center -annotate +0-100 \"$linha1\" -annotate +0+100 \"$linha2\" anuncio_final.jpg"

# Executa o comando
eval $comando
