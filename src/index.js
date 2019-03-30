import React from "react";
import ReactDOM from "react-dom";
import SearchForm from "./SearchForm";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: null,
      jokes: [],
      isFetchingJokes: false
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.searchJokes = this.searchJokes.bind(this);
  }

  searchJokes(limit = 20) {
    this.setState({ isFetchingJokes: true });
    fetch(
      `https://icanhazdadjoke.com/search?term=${
        this.state.searchTerm
      }&limit=${limit}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(json => {
        const jokes = json.results;
        console.log("jokes", jokes);
        this.setState({
          jokes,
          isFetchingJokes: false
        });
      });
  }

  onFeelingFunny() {
    this.searchJokes(1);
  }

  onSearchChange(value) {
    this.setState({ searchTerm: value });
  }

  renderJokes() {
    return (
      <ul className="jokes-list">
        {this.state.jokes.map(item => (
          <li key={item.id}>{item.joke}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <img className="logo" src="/DadJokesGoogle.png" />
        <SearchForm
          onFormSubmit={this.searchJokes}
          onSearchValueChange={this.onSearchChange}
          isSearching={this.state.isFetchingJokes}
          onSingleSearch={() => this.searchJokes(1)}
        />

        {this.state.isFetchingJokes
          ? "searching for jokes..."
          : this.renderJokes()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
