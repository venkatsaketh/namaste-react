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
      <div className="m-4 p-4 border w-[270px] bg-blue-300 rounded-md border-solid border-black">
        <img
          className="mb-5 rounded-xl"
          height="100px"
          width="100px"
          src={avatar_url}
        />
        <h2 className="mb-2">Name: {name}</h2>
        <h3 className="mb-2">Location: {location}</h3>
        <h4 className="mb-2">Bio: {bio}</h4>
      </div>
    );
  }
}

export default User;
