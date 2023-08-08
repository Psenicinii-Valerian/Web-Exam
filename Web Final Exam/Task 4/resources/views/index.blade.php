@extends("layout")

@section("doc_title", "Home")

@section("doc_body")
    <div class="cars">
        @foreach ($cars as $car)
        <div class="car">
            <h3>{{ $car->make }} {{ $car->model }}</h3>
            <p>Color: {{ $car->color }}</p>
            <img src="{{ $car->img }}" alt="Car Image">
        </div>
        @endforeach
    </div>
@endsection