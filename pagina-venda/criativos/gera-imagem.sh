#!/bin/bash

# Define os caminhos dos arquivos
imagem_grande="/home/usuario/Imagens/Criativos/MaquiagemEspelho.jpg"
imagem_pequena="/home/usuario/Imagens/Criativos/grupozap-acesso.png"
imagem_pequena_redimensionada="/home/usuario/Imagens/Criativos/imagem_pequena_redimensionada.png"
resultado="/home/usuario/Imagens/Criativos/resultado.jpg"

# Define o tamanho para redimensionar a imagem pequena
tamanho="600x600"  # Redimensionar para 100x100 pixels

# Redimensiona a imagem pequena
convert "$imagem_pequena" -resize "$tamanho" "$imagem_pequena_redimensionada"

# Sobrepõe a imagem redimensionada no canto superior esquerdo da imagem grande
convert "$imagem_grande" "$imagem_pequena_redimensionada" -gravity southeast -geometry +10+10 -composite "$resultado"

# Mensagem de sucesso
echo "Imagem sobreposta com sucesso! Resultado salvo em $resultado."
