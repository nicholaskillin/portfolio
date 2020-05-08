import React from 'react'
import { Text } from '@planning-center/ui-kit'
import { hot } from 'react-hot-loader/root'
import GithubLogo from 'images/github.png'

function App({ repos }) {
  let portfolioRepos = []

  repos.forEach((repo) => {
    if (
      repo.name !== 'gloomhaven-battle-goals-bot-issues' &&
      repo.name !== 'PCO-Home-Assistant-Integrations' &&
      repo.name !== 'PCO-Reports' &&
      repo.name !== 'streamdeck_profiles'
    ) {
      portfolioRepos.push(repo)
    }
  })

  let sortedPortfolioRepos = portfolioRepos.sort((a, b) =>
    a.updated_at > b.updated_at ? -1 : 1
  )

  console.log(portfolioRepos[0])

  return (
    <>
      <div id="apps" className="container">
        {sortedPortfolioRepos.map((repo) => (
          <div className="card" key={repo.id}>
            <img
              className="card-img-top"
              src={`https://raw.githubusercontent.com/nicholaskillin/${repo.name}/master/${repo.name}.png`}
            />
            <div className="card-body">
              <h5 className="card-title">{repo.name}</h5>
              <p className="card-text">{repo.description}</p>
              {repo.homepage && repo.name !== 'portfolio' && (
                <a
                  href={repo.homepage}
                  className="btn btn-primary"
                  target="blank"
                  style={{ marginRight: 4 + 'px' }}
                >
                  Live Website
                </a>
              )}
              <a href={repo.svn_url} target="blank">
                <img src={GithubLogo} className="github-image" />{' '}
              </a>
              <p id="last-updated">Last updated: {repo.updated_at}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default hot(App)
