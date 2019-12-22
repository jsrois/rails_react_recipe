Rails.application.routes.draw do
  root 'homepage#index'

  post '/login', to: 'sessions#create'
  get '/login', to: redirect("/")
  
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'

  resources :users, only: [:create, :show, :index]

end