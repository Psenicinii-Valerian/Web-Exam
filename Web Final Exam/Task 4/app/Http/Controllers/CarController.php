<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Car;

class CarController extends Controller
{
    public function Index() {
        $cars = Car::all();
        return view('index', ["cars" => $cars]);
    }

    public function CreateCarForm() {
        return view('create');
    }

    public function CreateCar(Request $req) {
        $req -> validate([
            "make" => "required|string|min:3",
            "model" => "required|string|min:3",
            "color" => "required|string|min:3",
            "image" => "required|string|min:3"
        ],
        [
            "make.required" => "Car's make is a required field!",
            "make.string" => "Car's make should have a text value!",
            "make.min" => "Car's make should be minimum 3 characters long!",

            "model.required" => "Car's model is a required field!",
            "model.string" => "Car's model should have a text value!",
            "model.min" => "Car's model should be minimum 3 characters long!",

            "color.required" => "Car's color is a required field!",
            "color.string" => "Car's color should have a text value!",
            "color.min" => "Car's color should be minimum 3 characters long!",

            "image.required" => "Car's image is a required field!",
            "image.string" => "Car's image should have a text value!",
            "image.min" => "Car's image should be minimum 3 characters long!",
        ]);

        Car::create([
            "make" => $req->input("make"),
            "model" => $req->input("model"),
            "color" => $req->input("color"),
            "img" => $req->input("image")
        ]);

        return redirect("/") -> with("success", "Item added successfuly!");
    }
}
