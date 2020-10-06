import GithubLogo from 'images/github.png'
import React from 'react'
import { hot } from 'react-hot-loader/root'

function App({ repos }) {
  let portfolioRepos = []

  repos.forEach((repo) => {
    if (
      repo.name !== 'gloomhaven-battle-goals-bot-issues' &&
      repo.name !== 'PCO-Home-Assistant-Integrations' &&
      repo.name !== 'PCO-Reports' &&
      repo.name !== 'streamdeck_profiles'
    ) {
      console.log(repo)
      portfolioRepos.push(repo)
    }
  })

  let sortedPortfolioRepos = portfolioRepos.sort((a, b) =>
    a.updated_at > b.updated_at ? -1 : 1
  )

  function localDateTime(date) {
    let originalDate = new Date(date)
    let readableDate = `${originalDate.toLocaleDateString()} ${originalDate.toLocaleTimeString()}`
    return readableDate
  }

  return (
    <>
      <div id="apps" className="container">
        {sortedPortfolioRepos.map((repo) => (
          <div className="card" key={repo.id}>
            <img
              className="card-img-top"
              src={`https://raw.githubusercontent.com/nicholaskillin/${repo.name}/${repo.default_branch}/${repo.name}.png`}
            />
            <div className="card-body">
              <h5 className="card-title">{repo.name}</h5>
              <p className="card-text">{repo.description}</p>
              {repo.homepage && repo.name !== 'portfolio' && (
                <a
                  href={repo.homepage}
                  className="btn btn-primary live-button"
                  target="blank"
                >
                  Live Website
                </a>
              )}
              <a href={repo.svn_url} target="blank">
                <img src={GithubLogo} className="github-image" />{' '}
              </a>
              <p className="last-updated">
                Last updated: {localDateTime(repo.updated_at)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default hot(App)
