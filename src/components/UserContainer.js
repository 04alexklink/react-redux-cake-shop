import {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux'

const UserContainer = ({users, fetchUsers}) => {

    useEffect(() => {
      fetchUsers()
    },[])
    return users.loading ? (
      <h2>Loading</h2>
    ) : users.error ? (
      <h2>Error: {users.error}</h2>
    ) : (
        <div>
      <h2>List of users:</h2>
      <div>
      {users.users.map(user => <p>{user.name}</p>)}
      </div>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    users: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
  fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
