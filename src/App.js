import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="wrapper">
      <Card
        img="https://upload.wikimedia.org/wikipedia/en/a/a6/The_Pianist_movie.jpg"
        title="The Pianist"
        description="The Pianist is a 2002 biographical war drama film produced and
        directed by Roman Polanski, with a script by Ronald Harwood, and
        starring Adrien Brody."
      />
      <Card
        img="https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
        title="Inception"
        description="Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife. "
      />
      <Card
        img="https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
        title="Interstellar"
        description="Interstellar is a 2014 epic science fiction film co-written, directed, and produced by Christopher Nolan."
      />
    </div>
  );
}

export default App;
