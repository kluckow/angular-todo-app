<?php
$mysqli = new mysqli("localhost", "root", "root1234", "my-todo-db");

	if($mysqli->mysqli_errno) {
		print("Error: Unable to connect to MySQL." . PHP_EOL);
		exit();
	}
// 	get query type send from angular
	$params = json_decode(file_get_contents("php://input"));
	$query_type = mysqli_real_escape_string($mysqli, $data->type);
	
	switch ($query_type) {
		case 'insert':
			echo 'insert query';
			break;
		case 'delete':
			echo 'delete query';
			break;
		case 'udate':
			echo 'update query';
			break;
		case 'select':
			echo 'select query';
			break;
		default:
			break;
	}

		
$mysqli->close;
?>