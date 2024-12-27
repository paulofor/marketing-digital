#!/bin/bash

# URL de download da fonte Nunito
font_url="https://github.com/googlefonts/nunito/archive/refs/tags/v16.0.1.tar.gz"

# Diretório temporário para extrair os arquivos de fonte
temp_dir=$(mktemp -d)

# Caminho completo para o arquivo compactado da fonte Nunito
font_archive="$temp_dir/nunito.tar.gz"

# Baixar o arquivo compactado da fonte Nunito
echo "Baixando o arquivo compactado da fonte Nunito..."
wget -q -O "$font_archive" "$font_url"

# Verificar se o download foi bem-sucedido
if [ $? -ne 0 ]; then
    echo "Erro: Falha ao baixar o arquivo compactado da fonte Nunito."
    exit 1
fi

# Extrair os arquivos de fonte
echo "Extraindo os arquivos de fonte..."
tar -xf "$font_archive" -C "$temp_dir"

# Mover os arquivos de fonte para o diretório de fontes do sistema
echo "Movendo os arquivos de fonte para o diretório de fontes do sistema..."
mkdir -p ~/.local/share/fonts/
cp -r "$temp_dir/nunito-16.0.1/fonts/"* ~/.local/share/fonts/

# Atualizar o cache de fontes
echo "Atualizando o cache de fontes..."
fc-cache -f -v

echo "Instalação concluída. A fonte Nunito está pronta para uso."
