#!/bin/bash

# URL de download do arquivo compactado da fonte Montserrat
font_url="https://github.com/JulietaUla/Montserrat/archive/refs/tags/v7.222.tar.gz"

# Diretório temporário para extrair os arquivos de fonte
temp_dir=$(mktemp -d)

# Caminho completo para o arquivo compactado da fonte Montserrat
font_archive="$temp_dir/Montserrat.tar.gz"

# Baixar o arquivo compactado da fonte Montserrat
echo "Baixando o arquivo compactado da fonte Montserrat..."
wget -q -O "$font_archive" "$font_url"

# Verificar se o download foi bem-sucedido
if [ $? -ne 0 ]; then
    echo "Erro: Falha ao baixar o arquivo compactado da fonte Montserrat."
    exit 1
fi

# Extrair os arquivos de fonte
echo "Extraindo os arquivos de fonte..."
tar -xf "$font_archive" -C "$temp_dir"

# Mover os arquivos de fonte para o diretório de fontes do sistema
echo "Movendo os arquivos de fonte para o diretório de fontes do sistema..."
mkdir -p ~/.local/share/fonts/
cp -r "$temp_dir/Montserrat-7.222/fonts/"* ~/.local/share/fonts/

# Atualizar o cache de fontes
echo "Atualizando o cache de fontes..."
fc-cache -f -v

echo "Instalação concluída. A fonte Montserrat está pronta para uso."
