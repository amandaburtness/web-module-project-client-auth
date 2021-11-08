import axios from 'axios'
import React from 'react'

class FriendsList extends React.Component {

  state = {
    friendsList: []
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    const token = localStorage.getItem('token')
    axios.get("http://localhost:5000/friends/:id", { headers: {authorization: token} })
    .then((res) => {
        this.setState({friendsList: res.data})
    })
    .catch(err => {
        console.log(err)
    })
  };
  

  render() {
    return (
      <div>
        <h2>Added Friends</h2>
        {this.friendsList.map(friend => {
            return(
                <div key={friend.id}>
                    <h3>Name: {friend.name}</h3>
                    <h3>Age: {friend.age}</h3>
                    <h3>Email: {friend.email}</h3>
                </div>
            )                 
        })}
      </div>
    )
  }
}

export default FriendsList