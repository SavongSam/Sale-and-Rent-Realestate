<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GMaps;

class PagesController extends Controller
{
    public function home(){
        $config['center'] = 'Phnom Penh Center, Toronto';
        $config['zoom'] = '10';
        $config['map_height'] = '100%';
        $config['scrollwheel'] = 'true';

        GMaps::initialize($config);

        $map = GMaps::create_map();

        return view('pages.home')->with('map',$map);
    }
}
