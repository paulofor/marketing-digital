<?php

if (isset($_GET['id'])) {
    $hotmartId = $_GET['id'];
    $posicao = $_GET['pos'];

    $url = 'http://tyche.ovh:23101/api/PaginaVendaScrolls/insereItem?hotmartId=' . urlencode($hotmartId) . '&posicao=' . urlencode($posicao);


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
} else {
    echo 'O parâmetro não foi especificado.';
}
?>
