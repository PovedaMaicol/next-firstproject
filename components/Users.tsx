
import React from 'react'
import { User } from '@/types/userTypes'
import Link from 'next/link'

interface UsersProps {
  user: User
}

const Users: React.FC<UsersProps> = ({user}) => {
  return (
    <Link 
    href={`/users/${user.id}`}
    className='bg-slate-400 mb-2 p-4 rounded-md text-black flex'
    >
   

    <div>
    <p className='font-bold'>{user.first_name} {user.last_name}</p>
    <p className='text-slate-100'>{user.email}</p>
    </div>

    <img className='rounded-full w-17' src={user.avatar} alt='avatar' />

  </Link>
  )
}

export default Users

