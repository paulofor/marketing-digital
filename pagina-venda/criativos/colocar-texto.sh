#!/bin/bash

# Verifica se o ImageMagick está instalado
if ! command -v convert &> /dev/null; then
    echo "ImageMagick não está instalado. Por favor, instale o ImageMagick e tente novamente."
    exit 1
fi

# Nome da imagem original
imagem_original="./duvida-homem.png"

# Tamanho da fonte
tamanho_fonte="49"
# Cor do fundo
cor_fundo="green"  # Cinza com 50% de transparência

# Cor do texto
cor_texto="#FFDE59"

# Texto a ser adicionado
linha1="Você se sente assim quando"
linha2=" o assunto é tecnologia ?"

# Gera o nome do arquivo de saída
nome_saida="imagem_com_texto_homem.jpg"

fonte_open_sans="/usr/share/fonts/truetype/opensans/OpenSans-SemiBold.ttf"

# Adiciona o texto à imagem
echo "convert \"$imagem_original\" -pointsize \"$tamanho_fonte\" -font \"$fonte_open_sans\" -fill \"$cor_texto\" -gravity south -annotate +20+20 \"$linha1\n$linha2\" \"$nome_saida\" "

convert "$imagem_original" -pointsize "$tamanho_fonte" -font "$fonte_open_sans" -fill "$cor_texto" -gravity south -annotate +20+20 "$linha1\n$linha2" "$nome_saida" 

# Adiciona o texto à imagem em um fundo cinza transparente
#convert "$imagem_original" -background "$cor_fundo" -splice 0x80 -gravity southeast -pointsize "$tamanho_fonte" -fill "$cor_texto" -annotate +20+20 "$linha1\n$linha2" "$nome_saida"


echo "Texto adicionado com sucesso à imagem. Arquivo de saída: $nome_saida"
