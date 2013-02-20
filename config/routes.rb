Dogspots::Application.routes.draw do
  match 'users(/:id)' => 'users#create', :via => [:post, :put]
  devise_for :users

  resources :spots, except: :edit, :defaults => { :format => 'json' }
  resources :comments, except: [:index, :show, :edit, :update], :defaults => { :format => 'json' }
  resources :ratings, except: [:index, :show, :edit, :update], :defaults => { :format => 'json' }

  root :to => 'app#index'
end
