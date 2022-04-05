<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">
        <a class="text-decoration-none text-light" href="#?">
          Titre
        </a>
      </th>
      <th scope="col">
        <a class="text-decoration-none text-light" href="">
          Prix
        </a>
      </th>
      <th scope="col">
        <a class="text-decoration-none text-light" href="">
          Classement
        </a>
      </th>
      <th scope="col">
        <a class="text-decoration-none text-light" href="">
          Genre
        </a>
      </th>
      <th scope="col">
        <a class="text-decoration-none text-light" href="">
          Nombre de locations
        </a>
      </th>
    </tr>
  </thead>

  <tbody>
    @foreach ($films as $film)
      <tr>
        <th scope="row">{{$film->title}}</th>
        <td>{{$film->rental_rate}}</td>
        <td>{{$film->rating}}</td>
        <td>{{$film->name}}</td>
        <td>{{$film->count}}</td>
      </tr>
    @endforeach
  </tbody>
</table>
