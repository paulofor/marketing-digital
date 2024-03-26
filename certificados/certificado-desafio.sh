#!/bin/bash

# Diretório de documentos do servidor web
WEBROOT="/var/www"

# Diretório onde o desafio será colocado
CHALLENGE_DIR="$WEBROOT/.well-known/acme-challenge"

# Extrair o domínio, o desafio e a resposta do Certbot
DOMAIN="$1"
CHALLENGE="$2"
RESPONSE="$3"

# Criar o diretório do desafio
mkdir -p "$CHALLENGE_DIR/$DOMAIN"

# Criar o arquivo de desafio
echo "$RESPONSE" > "$CHALLENGE_DIR/$DOMAIN/$CHALLENGE"

# Exibir mensagem indicando que o desafio foi configurado
echo "Desafio configurado para o domínio $DOMAIN"
