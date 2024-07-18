<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if($_POST["username"] == "aldo" and $_POST["password"] == "admin"){
            return true;
        }
    }
?>