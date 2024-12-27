#!/bin/bash

# Verifica se o ffmpeg está instalado
if ! command -v ffmpeg &> /dev/null; then
    echo "ffmpeg não encontrado. Por favor, instale o ffmpeg."
    exit 1
fi

# Defina os nomes dos arquivos de áudio e imagem
audio_file="produto1.mp3"
image_file="imagem2.png"

# Verifica se os arquivos de áudio e imagem existem
if [ ! -f "$audio_file" ]; then
    echo "Arquivo de áudio $audio_file não encontrado."
    exit 1
fi

if [ ! -f "$image_file" ]; then
    echo "Arquivo de imagem $image_file não encontrado."
    exit 1
fi

# Define o nome do arquivo de saída para o vídeo
output_file="video_saida.mp4"

# Use o ffmpeg para criar o vídeo
ffmpeg -loop 1 -i "$image_file" -i "$audio_file" -c:v libx264 -c:a aac -strict experimental -b:a 192k -shortest "$output_file"

echo "Vídeo gerado com sucesso: $output_file"
