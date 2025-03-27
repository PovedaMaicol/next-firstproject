import { User } from '@/types/userTypes'
import Users from '@/components/Users'
import React from 'react'




async function fetchApi() {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  return data.data
}

const HomePage = async () => {


const users = await fetchApi()

  return (
    <div>
      {
        users.map((user: User) => (
          <Users key={user.id} user={user} />
         
        ))
      }
    </div>
  )
}

export default HomePage