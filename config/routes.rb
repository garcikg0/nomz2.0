Rails.application.routes.draw do
  resources :ingredients
  resources :recipes
  resources :kitchens
  resources :users, only: [:create]
  post "/login", to: "users#login"
  get "/autologin", to: "users#autologin"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
