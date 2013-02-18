Dogspots::Application.routes.draw do
  # devise_for :users
  match 'users(/:id)' => 'users#create', :via => [:post, :put]

  resources :spots, except: :edit, :defaults => { :format => 'json' }
  resources :comments, except: [:index, :show, :edit, :update], :defaults => { :format => 'json' }
  resources :ratings, except: [:index, :show, :edit, :update], :defaults => { :format => 'json' }

  root :to => 'app#index'
end
