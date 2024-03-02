<?php

class Student {
    private $id;
    private $name;
    private $course;
    private $phone;

    private static $file_path = "data.txt";

    public function __construct($id, $name, $course, $phone) {
        $this->id = $id;
        $this->name = $name;
        $this->course = $course;
        $this->phone = $phone;
    }

    public function save() {
        file_put_contents(self::$file_path, $this->toCsv(), FILE_APPEND);
    }

    private function toCsv() {
        return "{$this->id},{$this->name},{$this->course},{$this->phone}" . PHP_EOL;
    }
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $id = $_POST["txtId"];
    $name = $_POST["txtName"];
    $course = $_POST["txtCourse"];
    $phone = $_POST["txtPhone"];

    if (preg_match("/^[0-9+]{11,14}$/", $phone)) {
        $student = new Student($id, $name, $course, $phone);
        $student->save();
        echo "Success!";
    } else {
        echo "Invalid Phone";
    }
}

?>
