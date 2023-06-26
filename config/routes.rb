Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  resources :culture_types, only: [:index, :show]
  resources :applicants, except: [:new, :edit]
  resources :companies, except: [:new, :edit]
  resources :matches, except: [:new, :edit]

end
