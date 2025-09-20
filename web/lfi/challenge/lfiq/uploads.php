<?php
if (isset($_GET["name"])) {
    $name = basename($_GET["name"]); 
    $path = __DIR__ . "/uploads/" . $name;

    if (file_exists($path)) {
        $mime = mime_content_type($path);
        header("Content-Type: " . $mime);
        header("Content-Length: " . filesize($path));
        readfile($path);
        exit;
    } else {
        http_response_code(404);
        echo "File not found!";
    }
} else {
    echo "No file specified!";
}

