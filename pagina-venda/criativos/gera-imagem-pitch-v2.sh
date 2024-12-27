#!/bin/bash

# Arquivo de saída
OUTPUT="itens.png"

# Largura e altura da imagem
WIDTH=300
HEIGHT=600  # Ajuste conforme necessário
PADDING=10

# Fonte e tamanho da fonte
FONT="Arial"
FONTSIZE=14
TITLE_FONTSIZE=20  # Tamanho da fonte do título
INTERLINE_SPACING=10  # Espaçamento entre linhas

# Cor de fundo e cor do texto
BGCOLOR="white"
TEXTCOLOR="black"

# Título
TITLE="O que você vai aprender"

# Inicialização
echo "Iniciando o script..."

# Ler o arquivo de texto
echo "Lendo o arquivo itens.txt..."
itens=()
while IFS= read -r line; do
    itens+=("$line")
done < itens.txt

# Verificar o número de itens lidos
ITEM_COUNT=${#itens[@]}
echo "Número de itens lidos: $ITEM_COUNT"

# Dividir itens em duas colunas
MID=$(( (ITEM_COUNT + 1) / 2 ))

# Criar texto das colunas
COL1=$(printf "%s\n" "${itens[@]:0:$MID}")
COL2=$(printf "%s\n" "${itens[@]:$MID}")

# Criar imagem do título
echo "Criando a imagem do título..."
convert -size ${WIDTH}x${HEIGHT} xc:$BGCOLOR -font $FONT -pointsize $TITLE_FONTSIZE \
        -fill $TEXTCOLOR -gravity center -annotate +0+$PADDING "$TITLE" title.png

# Criar imagem do conteúdo
echo "Criando a imagem do conteúdo..."
convert -size ${WIDTH}x${HEIGHT} xc:$BGCOLOR -font $FONT -pointsize $FONTSIZE \
        -fill $TEXTCOLOR -gravity northwest -annotate +$PADDING+$((PADDING+TITLE_FONTSIZE)) "$COL1" \
        -gravity northeast -annotate +$PADDING+$((PADDING+TITLE_FONTSIZE)) "$COL2" \
        $OUTPUT

echo "Imagem criada: $OUTPUT"
