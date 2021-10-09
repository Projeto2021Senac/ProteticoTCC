<?php

require 'vendor/autoload.php';

use Classes\Entity\paciente;
define('NAME','Paciente');
define('LINK','listaPaciente.php');


//busca
$busca = filter_input(INPUT_POST, 'busca', FILTER_SANITIZE_STRING);

//condições sql
$condicoes = [
    strlen($busca) ? 'nomePaciente LIKE "%'. str_replace('', '%', $busca).'%"': null
    
];


$where = implode(' AND ', $condicoes);



$pacientes = paciente::getPacientes($where);




include __DIR__.'/includes/header.php';
include __DIR__.'/includes/formularioListaPaciente.php';
include __DIR__.'/includes/mensagensCRUD.php';
include __DIR__.'/includes/footer.php';