@extends("layout")

@section("doc_title", "Create Car")

@section("doc_body")
    <form action="/create" class="car-form" method="POST">
        @csrf
        <input type="text" name="make" placeholder="Enter car's make">
        @error('make')
            <p class="error">{{ $message }}</p>
        @enderror

        <input type="text" name="model" placeholder="Enter car's model">
        @error('model')
            <p class="error">{{ $message }}</p>
        @enderror

        <input type="text" name="color" placeholder="Enter car's color">
        @error('color')
            <p class="error">{{ $message }}</p>
        @enderror

        <input type="text" name="image" placeholder="Enter car image's link">
        @error('image')
            <p class="error">{{ $message }}</p>
        @enderror

        <button type="submit">Create</button>
    </form>
@endsection