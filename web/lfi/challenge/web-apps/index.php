<?php
$uploadDir = __DIR__ . "/uploads/";
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

$allowedExtensions = ["txt", "png", "jpg", "pdf", "php"];

function allowed_file($filename, $allowedExtensions) {
    $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
    return in_array($ext, $allowedExtensions);
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["file"])) {
    $file = $_FILES["file"];
    if (!allowed_file($file["name"], $allowedExtensions)) {
        echo "<h1>Not allowed file</h1>";
        exit;
    }

    $ext = pathinfo($file["name"], PATHINFO_EXTENSION);
    $filename = bin2hex(random_bytes(8)) . "." . $ext;
    $dest = $uploadDir . $filename;

    if (move_uploaded_file($file["tmp_name"], $dest)) {
        header("Location: /index.php?file=success.php&name=" . urlencode($filename));
        exit;
    } else {
        echo "<h1>Upload failed!</h1>";
        exit;
    }
}

if (isset($_GET["file"])) {
    $target = $_GET["file"];
    include($target);   
    exit;
}

$files = array_diff(scandir($uploadDir), [".", ".."]);
?>
<!doctype html>
<html>
<head><title>Upload + Include Demo</title></head>
<body>
    <h1>Upload new File</h1>
    <form method="post" enctype="multipart/form-data">
        <input type="file" name="file">
        <input type="submit" value="Upload">
    </form>

    <h2>Uploaded Files</h2>
    <ul>
        <?php foreach ($files as $f): ?>
            <li><a href="uploads.php?name=uploads/<?= urlencode($f) ?>"><?= htmlspecialchars($f) ?></a></li>
        <?php endforeach; ?>
    </ul>
</body>
</html>

