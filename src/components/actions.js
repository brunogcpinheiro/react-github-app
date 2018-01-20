import React from 'react'

const Actions = ({ handleRepos, handleStarred }) => (
  <div className='actions'>
    <button onClick={handleRepos}>Ver repositórios</button>
    <button onClick={handleStarred}>Ver favoritos</button>
  </div>
)

export default Actions
