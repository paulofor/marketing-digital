<?php
// Obtém ou define o valor do parâmetro códigoPagina
$codigoPagina = isset($_GET['codigoPagina']) ? $_GET['codigoPagina'] : '';

// Obtém ou define o valor do parâmetro utmCampaign
$posicao = isset($_GET['posicao']) ? $_GET['posicao'] : '';


// Constrói a URL com os parâmetros
$url = 'http://tyche.ovh:23101/api/ScrollPaginaVendaPropria/InsereItem';

$url .= '?codigoPagina=' . urlencode($codigoPagina);
$url .= '&posicao=' . urlencode($posicao);

// Agora a URL está construída apenas com os parâmetros recebidos

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute a requisição e obtenha a resposta
$response = curl_exec($ch);

if ($response === false) {
    $error = curl_error($ch);
    echo "Erro na requisição: " . $error;
} else {
    header('Content-Type: application/json'); // Defina o tipo de conteúdo da resposta
    echo $response;
}

curl_close($ch);

?>