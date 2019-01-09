Rails.application.routes.draw do
  
  root 'static_pages#home'
  get '/calendar', to: "static_pages#calendar"
  
end
