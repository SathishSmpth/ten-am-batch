import React from "react";
import Table from "../shared/table"

class Sports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }))
      .catch((err) => console.error(err));
  }
  setCount = () => {
    // console.log("This is Called");
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
       <Table users={this.state.users}/>
      </div>
    );
  }
}

export default Sports;
