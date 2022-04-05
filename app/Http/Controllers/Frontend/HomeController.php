<?php

namespace App\Http\Controllers\Frontend;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

/**
 * Class HomeController.
 */
class HomeController extends Controller
{
    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        return view('frontend.index');
    }

    /**
     * @param String $orderBy
     * @param String $order
     * @param String $limit
     * @param String $offset
     * 
     * @return \Illuminate\Support\Collection
     */
    public function getFilms(Request $request)
    {
        $orderBy = $request->input('orderBy');
        $limit = $request->input('limit');
        $offset = $request->input('offset');

        $query = 'SELECT query1.title, query1.rental_rate, query1.rating, query1.name, query2.count
            FROM
                (SELECT f.title, f.rental_rate, f.rating, c.name
                FROM film AS f
                JOIN film_category AS fa ON f.film_id = fa.film_id
                JOIN category AS c ON c.category_id = fa.category_id
                ) query1
            LEFT JOIN
                (SELECT count(*) AS count, f.title 
                FROM rental AS r 
                JOIN inventory AS i ON r.inventory_id = i.inventory_id
                JOIN film AS f ON f.film_id = i.film_id
                GROUP BY f.title) query2
            ON query1.title = query2.title
            ORDER BY '.$orderBy.'
            LIMIT '.$limit.' 
            OFFSET '.$offset
        ;

        $films = DB::connection('mysql2')->select($query);
        return $films;
    }
}
