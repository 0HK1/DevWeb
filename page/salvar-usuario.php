<?php 
    switch ($_REQUEST["acao"]) {
        case "cadastrar":
            $username = $_POST["nome"];
            $email = $_POST["email"];

            $sql = "INSERT INTO user(username, email) VALUES ('{$username}','{$email}')";
            $res = $conn->query($sql);
            if ($res) {
                echo '<script>alert("Inserção bem-sucedida!");</script>';
            } else {
                echo '<script>alert("deu merda!");</script>';
            }
            break;
    }
?>