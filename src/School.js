import react from "react";

export function Name() {
  return <h2> My name is Lionel!</h2>;
}


export function Attend() {
  return (
    <div>
      <Name />
      <h3> I am attending Stanford's React class</h3>
    </div>
  );
}

export class Online extends react.Component {
  constructor() {
    super();
    this.state = { platform: "Zoom" };
  }

  render() {
    return <p>I am taking this course on {this.props.platform} </p>;
  }
}


export default function Totalschool() {
  
}