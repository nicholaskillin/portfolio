class StaticPagesController < ApplicationController
    
  def home
    # HTTParty.get("https://maker.ifttt.com/trigger/portfolio_visited/with/key/#{Rails.application.credentials.ifttt_webhook_key}")
    repos = Github.repos.list user: 'nicholaskillin'
    @repos = repos.body
  end
    
end
