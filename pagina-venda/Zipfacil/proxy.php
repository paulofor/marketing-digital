<?php

$url = 'http://tyche.ovh:23101/api/LoadPaginaVendas/insereItem?idHm=352011';
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
