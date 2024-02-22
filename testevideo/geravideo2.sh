#!/bin/bash

# Definindo variáveis
AUDIO_FILE="arquivo_concatenado.wav"
SUBTITLE_FILE="legendas.srt"
IMAGE_FILE="imagem2.png"
OUTPUT_VIDEO="output.mp4"

# Configurações de vídeo
VIDEO_DURATION=$(ffprobe -i "$AUDIO_FILE" -show_entries format=duration -v quiet -of csv="p=0")
RESOLUTION="1920x1080"  # Resolução do vídeo
FRAME_RATE=30            # Taxa de quadros (frames por segundo)

# Gerando o vídeo
#ffmpeg -loop 1 -i "$IMAGE_FILE" -i "$AUDIO_FILE" -vf "subtitles=$SUBTITLE_FILE" -c:a aac -strict experimental -c:v libx264 -preset slow -tune stillimage -crf 18 -r "$FRAME_RATE" -t "$VIDEO_DURATION" -s "$RESOLUTION" "$OUTPUT_VIDEO"

# Mostrar o comando ffmpeg
echo "ffmpeg -loop 1 -i \"$IMAGE_FILE\" -i \"$AUDIO_FILE\" -vf \"subtitles=$SUBTITLE_FILE\" -c:a aac -strict experimental -c:v libx264 -preset slow -tune stillimage -crf 18 -r \"$FRAME_RATE\" -t \"$VIDEO_DURATION\" -s \"$RESOLUTION\" \"$OUTPUT_VIDEO\""

# Gerando o vídeo
ffmpeg -loop 1 -i "$IMAGE_FILE" -i "$AUDIO_FILE" -vf "subtitles=$SUBTITLE_FILE" -c:a aac -b:a 192k -ar 48000 -strict experimental -c:v libx264 -preset slow -tune stillimage -crf 18 -r "$FRAME_RATE" -t "$VIDEO_DURATION" -s "$RESOLUTION" "$OUTPUT_VIDEO"


echo "Vídeo gerado com sucesso em: $OUTPUT_VIDEO"

