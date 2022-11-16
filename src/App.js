import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="App-header">Dictionary</h1>
      <h2>What word are you looking for?</h2>
      <input></input>
      <div className="word-information">
        <div className="word-header">Yoga</div>
        <div className="word-syllable">yo•ga</div>
        <div>noun</div>
        <div className="word-pronunciation">/ˈyōɡə/</div>
        <div className="word-meaning">
          <p>
            A Hindu spiritual and ascetic discipline, a part of which, including
            breath control, simple meditation, and the adoption of specific
            bodily postures, is widely practiced for health and relaxation.
          </p>
        </div>
        <div>
          <div>
            Collage
          </div>
        </div>
      </div>
    </div>
  );
}
