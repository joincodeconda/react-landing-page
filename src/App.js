import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
  <body class="text-center">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="masthead mb-auto">
        <div class="inner">
          <h3 class="masthead-brand">CodeConda</h3>
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link active" href="https://www.codeconda.com/scheduling">Bookings</a>
            <a class="nav-link" href="https://www.codeconda.com/resources">Blog</a>
            <a class="nav-link" href="https://www.codeconda.com/quotes">Contact</a>
          </nav>
        </div>
      </header>

      <main role="main" class="inner cover">
        <h1 class="cover-heading">Welcome to our landing page.</h1>
        <p class="lead">This is a landing page example to demonstrate the usefulness of ReactJS. We including convenient links to various CodeConda pages above, and a simple call to action button below which will direct you to the CodeConda home page.</p>
        <p class="lead">
          <a href="https://www.codeconda.com/" class="btn btn-lg btn-secondary">Learn more</a>
        </p>
      </main>
    </div>
  </body>
  );
}

export default App;
