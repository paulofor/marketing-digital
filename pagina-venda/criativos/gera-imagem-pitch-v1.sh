#!/bin/bash

# Arquivo de saída
OUTPUT="itens.png"

# Largura e altura da imagem
WIDTH=300
PADDING=10

# Fonte e tamanho da fonte
FONT="Arial"
FONTSIZE=14
INTERLINE_SPACING=10  # Espaçamento entre linhas

# Cor de fundo e cor do texto
BGCOLOR="white"
TEXTCOLOR="black"

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

# Criar a imagem
echo "Criando a imagem..."
convert -size ${WIDTH}x -background $BGCOLOR -fill $TEXTCOLOR -gravity North \
        -font $FONT -pointsize $FONTSIZE -interline-spacing $INTERLINE_SPACING \
        caption:"$COL1" \
        caption:"$COL2" +append $OUTPUT

echo "Imagem criada: $OUTPUT"
