#!/bin/bash

# Solicitar o nome do arquivo de desafio
read -p "Digite o nome do arquivo de desafio: " CHALLENGE_FILENAME

# Solicitar o conteúdo do desafio
read -p "Digite o conteúdo do desafio: " CHALLENGE_CONTENT

# Diretório onde o desafio será colocado
WEBROOT="/var/www/palfmarketing.online/www"
CHALLENGE_DIR="$WEBROOT/.well-known/acme-challenge"

# Criar o diretório do desafio
mkdir -p "$CHALLENGE_DIR"

# Criar o arquivo de desafio
echo "$CHALLENGE_CONTENT" > "$CHALLENGE_DIR/$CHALLENGE_FILENAME"

# Exibir mensagem indicando que o desafio foi configurado
echo "Desafio configurado com sucesso."
