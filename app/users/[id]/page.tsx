import React from 'react'

async function getUser(id: string) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data

}

interface Props {
    params: {
        id: string
    }
}

const UserPage = async ({params}: Props) => {
    console.log(params)
    const user = await getUser(params.id)
  return (
    <div className='bg-slate-400 p-10 rounded-md'>
        <img 
        src={user.avatar} 
        className='m-auto my-4' />

        <h3
        className='3xl font-bold'>{user.id}{user.first_name}
        {user.last_name}
        </h3>
        <p>{user.email}</p>
        
    </div>
    
  )
}

export default UserPage