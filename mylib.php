<?php
function getConnect(){
    $host = "localhost:3306";;
    $username = "root";
    $password = "";
    $db = "db2108a0";
    
    $cn = new mysqli($host, $username, $password, $db);
    //1. tao ket noi den csdl
    if ($cn->connect_errno) {
        die ("<h3>Error". $cn->connect_error . "</h3>");
    }
    return $cn;
}
?>