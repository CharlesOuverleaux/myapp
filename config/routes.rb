Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  
  namespace :api do
    namespace :v1 do
      resources :cultures, only: [:new, :index, :show, :create]
      resources :applicants, except: [:new, :edit]
      resources :companies, except: [:new, :edit]
      resources :matches, except: [:new, :edit]
    end
  end
end
