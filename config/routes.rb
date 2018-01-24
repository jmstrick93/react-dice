Rails.application.routes.draw do
    scope '/api' do
      # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
      get '/rollHistory', to: 'dice#fetch_roll_history'
      post '/rollHistory', to: 'dice#post_roll_history'
    end
end
