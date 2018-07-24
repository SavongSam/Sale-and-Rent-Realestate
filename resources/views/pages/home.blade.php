<head>{!! $map['js'] !!}</head>
@extends('layouts.app')
@section('content')

    <div class="dropdown_list">
        <div class="btn-group">
            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                RENT AND SALE <span class="caret"> </span>
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">RENT AND SALE</a></li>
                <li><a class="dropdown-item" href="#">RENT</a></li>
                <li><a class="dropdown-item" href="#">SALE</a></li>
            </ul>
        </div>

        <div class="btn-group">
            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ALL REALESTATE <span class="caret"> </span>
            </button>
            <div class="dropdown-menu">
                <li><a class="dropdown-item" href="#">ALL REALESTATE</a></li>
                <li><a class="dropdown-item" href="#">LAND</a></li>
                <li><a class="dropdown-item" href="#">HOUSE</a></li>
                <li><a class="dropdown-item" href="#">VILLA</a></li>
                <li><a class="dropdown-item" href="#">WORK PLACE</a></li>
            </div>
        </div>

        <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                A WHOLE COUNTRY
            </button>
            <div class="dropdown-menu">
                <li><a class="dropdown-item" href="#">A WHOLE COUNTRY</a></li>
                <li><a class="dropdown-item" href="#">RENT</a></li>
                <li><a class="dropdown-item" href="#">SALE</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li><a class="dropdown-item" href="#">RENT</a></li>
                <li><a class="dropdown-item" href="#">SALE</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </div>
        </div>
    </div>

    <div id="map">
        {!! $map['html'] !!}
    </div>
@endsection