import React from 'react'
import {useSelector} from 'react-redux'

const UserList = () => {
  const state = useSelector(state => state)
  console.log(state)

  return <div>index</div>
}

export default UserList
