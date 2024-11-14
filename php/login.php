<?php

require("database.php");

$posdata = file_get_contents("php://input");
$request = json_decode($posdata, true);

if (isset($posdata) && !empty($posdata)) {

    if (isset($posdata['psedo']) && !empty($posdata['passwordAdmin'])) {
        
    }
    
    $psedoAdmin = trim($request->psedo);
    $passwordAdmin= trim($request->password);

    try {
        $sql = "SELECT * FROM admin WHERE  psedo =:psedoAdmin AND password =:passwordAdmin";
        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':psedo', $psedoAdmin, PDO::PARAM_STR);
        $stmt->bindParam(':password', $passwordAdmin, PDO::PARAM_STR);

        $stmt->execute();

        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if (count($rows) > 0) {
            echo json_encode($rows);
        }else {
            http_response_code(404);
        }
    } catch (\PDOException $e) {
        http_response_code(500);
        echo json_encode(value:["error" => "Database error: " . $e->getMessage()]);
    }

   

}
?>

