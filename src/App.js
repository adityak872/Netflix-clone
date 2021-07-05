import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <br></br>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <br></br>
      <Row title="Upcoming Movies" fetchUrl={requests.fetchTopRated} />
      <br></br>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <br></br>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <br></br>

      <Row title="Action Movies" fetchUrl={requests.fetchAction} />
      <br></br>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
      <br></br>
      <Row title="Roamnce Movies" fetchUrl={requests.fetchRomance} />
      <br></br>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <br></br>
      <script
        type="text/javascript"
        src="https://unpkg.com/movie-trailer"
      ></script>
    </div>
  );
}

export default App;
