<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

$app = new \Slim\App;
$test = true;

if ($test) {
  $app->get('/', function () {
    echo file_get_contents('_index.html');
  });
}

$now = new DateTime();
$begin_day = new DateTime("2016-02-20");
$diff = $now->diff($begin_day)->d;

function connect_db(){
  $server = 'ulibi.cwvkylm2lmvh.ap-southeast-1.rds.amazonaws.com'; // this may be an ip address instead
  $user = 'hungphongbk';
  $pass = 'Hungphong1812';
  $database = 'effoc02160';
  $connection = new mysqli($server, $user, $pass, $database);
  $connection->set_charset('utf-8');

  return $connection;
}

$app->post('/', function() {
  echo file_get_contents('_index.html');
});

$app->post('/u', function(Request $request, Response $response) use ($app, $diff) {
  $response->withHeader('Content-type', 'application/json');

  // Kiem tra xem thong tin nguoi dung co ton tai tren CSDL khong
  $db = connect_db();
  $body = $request->getParsedBody();
  $id = $body['id'];
  $name = $body['name'];

  $result = $db->query("SELECT username, phonenumber, days FROM user WHERE user_id = '$id'");
  while ( $row = $result->fetch_assoc() ) {
    $data[] = $row;
  }
  if (isset($data) && count($data)>0){
    $data[0]['today'] = $diff;
    echo json_encode($data[0]);
  } else {
    $db->query("INSERT INTO user(user_id, username, phonenumber) VALUES ('$id','$name','')");
    echo json_encode([
      'user_id' => $id,
      'username' => $name,
      'phonenumber' => '',
      'days' => '["", "", ""]',
      'today' => $diff
    ]);
  }
});

$app->post('/d', function(Request $request, Response $response) use ($diff) {
  /**
   * Thong tin POST bao gom
   * ID cua nguoi choi
   * prefix cua mon qua
   */

  $response->withHeader('Content-type', 'application/json');

  $db = connect_db();
  $body = $request->getParsedBody();
  $id = $body['id'];
  $prefix = $body['prefix'];

  // generate voucher
  if ($prefix == ""){
    $code = "-";
  } else {
    do {
      $code = $prefix . sprintf("%03d", rand() % 1000);

      // check code exist
      $result = $db->query("SELECT * FROM used_voucher WHERE voucher_id='$code'");
      if ($result->fetch_assoc())
        $exist = true;
      else $exist = false;
    } while ($exist);
    $db->query("INSERT INTO used_voucher(voucher_id) VALUES('$code')");
    $result = $db->query("SELECT count FROM remains WHERE prefix='$prefix'");
    $data = $result->fetch_assoc();
    $count = $data['count']; $count--;

    $db->query("UPDATE remains SET count=$count WHERE prefix='$prefix'");
  }

    $db->query("UPDATE user SET days='[\"$code\", \"\", \"\"]' WHERE user_id='$id'");

  return json_encode([
    "code" => $code
  ]);
});

$app->post('/c',  function(Request $request, Response $response) use ($diff) {
  $response->withHeader('Content-type', 'application/json');

  $db = connect_db();
  $body = $request->getParsedBody();
  $id = $body['id'];

  $result = $db->query("SELECT days FROM user WHERE user_id='$id'");
  $data = $result->fetch_assoc();
  $days = json_decode($data['days']);
  if($days[0] != "" && $days[0] != "-")
    return json_encode([ "available" => "no" ]);
  else return json_encode([ "available" => "yes" ]);
});

$app->get('/r', function(Request $request, Response $response) {
  $response->withHeader('Content-type', 'application/json');

  $db = connect_db();
  $result = $db->query("SELECT * FROM remains");
  $data = [];
  while ( $row = $result->fetch_assoc() ) {
    $data[] = $row;
  }

  return json_encode($data);
});

$app->post('/r', function(Request $request, Response $response) {
  $response->withHeader('Content-type', 'application/json');

  $db = connect_db();
  $body = $request->getParsedBody();
  $id = $body['prefix'];
  $result = $db->query("SELECT days FROM remains WHERE prefix='$id'");
  $data = $result->fetch_assoc();
  $count = $data['count']; $count--;

  $db->query("UPDATE remains SET count=$count WHERE prefix='$id'");
  return json_encode(['status' => 'OK']);
});

$app->get('/e', function(Request $request, Response $response) use ($diff){

});

$app->run();
