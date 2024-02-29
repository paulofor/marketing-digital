#!/bin/bash

# Definindo variáveis
AUDIO_FILE="/home/usuario/aplicacoes/MarketingDigital/audio/completo/conectado02.wav"
SUBTITLE_FILE="/home/usuario/aplicacoes/MarketingDigital/audio/completo/legendas02.crt"
IMAGE_FILE="/home/usuario/aplicacoes/MarketingDigital/audio/completo/imagem_fundo02.png"
OUTPUT_VIDEO="/home/usuario/aplicacoes/MarketingDigital/audio/completo/output02_fundo_02.mp4"

# Configurações de vídeo
VIDEO_DURATION=$(ffprobe -i "$AUDIO_FILE" -show_entries format=duration -v quiet -of csv="p=0")
RESOLUTION="1920x1080"  # Resolução do vídeo
FRAME_RATE=20            # Taxa de quadros (frames por segundo)

# Gerando o vídeo
#ffmpeg -loop 1 -i "$IMAGE_FILE" -i "$AUDIO_FILE" -vf "subtitles=$SUBTITLE_FILE" -c:a aac -strict experimental -c:v libx264 -preset slow -tune stillimage -crf 18 -r "$FRAME_RATE" -t "$VIDEO_DURATION" -s "$RESOLUTION" "$OUTPUT_VIDEO"

# Mostrar o comando ffmpeg
echo "ffmpeg -loop 1 -i \"$IMAGE_FILE\" -i \"$AUDIO_FILE\" -vf \"subtitles=$SUBTITLE_FILE\" -c:a aac -strict experimental -c:v libx264 -preset slow -tune stillimage -crf 18 -r \"$FRAME_RATE\" -t \"$VIDEO_DURATION\" -s \"$RESOLUTION\" \"$OUTPUT_VIDEO\""

# Gerando o vídeo
#ffmpeg -loop 1 -i "$IMAGE_FILE" -i "$AUDIO_FILE" -vf "subtitles=$SUBTITLE_FILE" -c:a aac -b:a 192k -ar 48000 -strict experimental -c:v libx264 -preset slow -tune stillimage -crf 18 -r "$FRAME_RATE" -t "$VIDEO_DURATION" -s "$RESOLUTION" "$OUTPUT_VIDEO"

# Gerando o vídeo
ffmpeg -loop 1 -i "$IMAGE_FILE" -i "$AUDIO_FILE" -vf "subtitles=$SUBTITLE_FILE:force_style='BoxBorderColor=00000000@1,BorderStyle=3,Shadow=3,MarginV=20'" -c:a aac -b:a 192k -ar 48000 -strict experimental -c:v libx264 -preset slow -tune stillimage -crf 18 -r "$FRAME_RATE" -t "$VIDEO_DURATION" -s "$RESOLUTION" "$OUTPUT_VIDEO"



echo "Vídeo gerado com sucesso em: $OUTPUT_VIDEO"

