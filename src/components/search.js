import React, { PropTypes } from 'react'

const Search = ({ isFetching, handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário no GitHub'
      disabled={isFetching}
      onKeyUp={handleSearch} />
  </div>
)

Search.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default Search
