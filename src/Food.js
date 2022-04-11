import react from 'react';

export default class Lunch extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: "Lunch",
      appetizer: "Salad",
      entree: "Pizza",
      drink: "Coke",
    };
  }
  changeEntree = () => {
    this.setState({entree: "Hamburger"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.meal} Order</h1>
        <p>
          I will have a {this.state.appetizer} to start, then the {this.state.entree} and wash it down with a {this.state.drink}.
        </p>
        <button
          type="button"
          onClick={this.changeEntree}
        >Change Entree</button>
      </div>
    );
  }
}