<?php
$name = $_GET["name"] ?? "";
?>
<!doctype html>
<html>
<head><title>Success</title></head>
<body>
    <h1>Upload successful!</h1>
    <p>Saved as: <?= htmlspecialchars($name) ?></p>
    <a href="index.php">Go back</a>
</body>
</html>

