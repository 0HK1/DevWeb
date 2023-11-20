<?php 
    switch ($_REQUEST["acao"]) {
        case "cadastrar":
            $email = $_POST["email"];
            $senha = $_POST["senha"];
            $username = $_POST["username"]; 

            $sql = "INSERT INTO user(email, senha, username) VALUES ('{$email}','{$senha}', '{$username}')";
            $res = $conn->query($sql);
            if ($res) {
                echo '<script>alert("Inserção bem-sucedida!");</script>';
                print "<script>location.href='Formulario.html';</script>";
            } 
            break;
    }
?>