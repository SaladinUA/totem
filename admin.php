<!DOCTYPE html>
<html>

<head>
    <title>admin</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles/admin-style.css">
    <script src="http://code.jquery.com/jquery-1.12.4.js" integrity="sha256-Qw82+bXyGq6MydymqBxNPYTaUXXq7c8v3CwiYwLLNXU=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="scripts/admin-script.js"></script>
</head>

<body>
    <form id="login-form">
        <fieldset>
            <legend>Вход</legend>
            <input type="text" id="login" name="login" placeholder="Login" required autofocus>
            <input type="password" id="password" name="password" placeholder="Password" autocomplete="off" required>
            <input type="submit" id="submit" value="Go Billy!">
            <input type="reset" id="reset" value="Сбросить"> </fieldset>
    </form>
    <div id="admin-page">
        <div id="buttons">
            <button id="blog">Блог</button>
            <button id="gallery">Галерея</button>
            <button id="comments">Коменти</button>
        </div>
        <!-- Редактор -->
        <div id="editor">
        <?php
            $number = '123';
            echo $number;
        ?>
        </div>
    </div>
</body>

</html>