import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'

import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const key = e.which || e.keyCode
    const ENTER = 13

    if (key === ENTER) {
      this.setState({ isFetching: true })

      ajax().get(`https://api.github.com/users/${value}`).then((result) => {
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          repos: [],
          starred: []
        })
      }).always(() => {
        this.setState({ isFetching: false })
      })
    }
  }

  handleRepos (type) {
    return (e) => {
      ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/${type}`).then((result) => {
        this.setState({
          [type]: result.map((repo) => ({
            name: repo.name,
            link: repo.html_url
          }))
        })
      })
    }
  }

  render () {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        isFetching={this.state.isFetching}
        handleSearch={(e) => this.handleSearch(e)}
        handleRepos={this.handleRepos('repos')}
        handleStarred={this.handleRepos('starred')} />
    )
  }
}

export default App
