class StaticPagesController < ApplicationController
    
  def home
    repos = Github.repos.list user: 'nicholaskillin'
    @repos = repos.body
  end
    
end
