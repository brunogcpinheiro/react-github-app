import React from 'react'

const App = () => (
  <div className='app'>
    <div className='search'>
      <input type='search' placeholder='digite o nome do usuário' />
    </div>

    <div className='user-info'>
      <img src='https://avatars1.githubusercontent.com/u/13948019?v=4' alt='Profile Image' />
      <h1>
        <a href='https://github.com/brunogcpinheiro'>Bruno Pinheiro</a>
      </h1>

      <ul className='repos-info'>
        <li>- Repositórios: 15</li>
        <li>- Seguidores: 2</li>
        <li>- Seguindo: 3</li>
      </ul>

      <div className='actions'>
        <button>Ver repositórios</button>
        <button>Ver favoritos</button>
      </div>

      <div className='repos'>
        <h2>Repositórios:</h2>
        <ul>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>

      <div className='starred'>
        <h2>Favoritos:</h2>
        <ul>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>
    </div>
  </div>
)

export default App
