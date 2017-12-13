<?php 
header("Content-Type:application/json;charset=utf-8");
$rows=
["name"=>["水仙","茉莉","百合","玫瑰"],
"data"=>[420,350,200,66]
];
echo json_encode($rows);
 ?>