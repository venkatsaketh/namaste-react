import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "DUMMY",
        location: "DUMMMM",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/venkatsaketh");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  //   componentDidUpdate() {
  //     console.log("update");
  //   }

  //   componentWillUnmount() {
  //     console.log("unmount");
  //   }

  render() {
    const { name, location, avatar_url, bio } = this.state.userInfo;

    return (
      <div className="user-card">
        <img height="100px" width="100px" src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Bio: {bio}</h4>
      </div>
    );
  }
}

export default User;
