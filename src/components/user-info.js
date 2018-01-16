import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars1.githubusercontent.com/u/13948019?v=4' alt='Profile Image' />
    <h1 className='username'>
      <a href='https://github.com/brunogcpinheiro'>Bruno Pinheiro</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios: 15</li>
      <li>Seguidores: 2</li>
      <li>Seguindo: 3</li>
    </ul>
  </div>
)

export default UserInfo
