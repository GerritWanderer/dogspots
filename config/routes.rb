Dogspots::Application.routes.draw do
  resources :spots, except: :edit, :defaults => { :format => 'json' }
  resources :comments, except: [:index, :show, :edit, :update], :defaults => { :format => 'json' }

  root :to => 'app#index'
end
