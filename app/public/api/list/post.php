<?php

// Step 0: Validation
use Ramsey\Uuid\Uuid;
$guid = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Person
    (personId, firstName, lastName, gender, dob, mobilePhone, workPhone, street, city, state, zip, region, stationNumber, radioNumber, position, startDate, isActive, email, isEmployee)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
);

$stmt->execute([
  $guid,
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['gender'],
  $_POST['dob'],
  $_POST['mobilePhone'],
  $_POST['workPhone'],
  $_POST['street'],
  $_POST['city'],
  $_POST['state'],
  $_POST['zip'],
  $_POST['region'],
  $_POST['stationNumber'],
  $_POST['radioNumber'],
  $_POST['position'],
  $_POST['startDate'],
  $_POST['isActive'],
  $_POST['email'],
  $_POST['isEmployee']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/?guid='.$guid);
