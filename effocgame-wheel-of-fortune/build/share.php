<?php
    if (isset($_GET['name'])){
        $name = $_GET['name'];
        $prize = $_GET['prize'];
        $code = $_GET['code'];
        $sentence = "$name đã giành được phần thưởng là một $prize với mã dự thưởng là $code\nCùng chơi để giành được những phần thưởng có giá trị nhé (^_^)";
    } else {
        $sentence = "Meo co gi ca";
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <meta property="og:title" content="Chúc mừng!" />
    <meta property="og:description" content="<?= $sentence ?>" />
    <meta property="og:site_name" content="http://www.effoc.vn" />
    <meta property="fb:app_id" content="662347747238324" />
    <meta property="og:image:width" content="200">
    <meta property="og:image:height" content="200">
    <meta property="og:image" content="https://hungphongbk.tmp-technology.com/effocgame/build/assets/images/effoc.png">
    <meta property="og:url" content="https://apps.facebook.com/effocgamefirst/" />
</head>
<body>
<script>
    window.location = "https://apps.facebook.com/662347747238324/";
</script>
</body>
</html>