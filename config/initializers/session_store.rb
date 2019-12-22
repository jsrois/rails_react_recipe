if Rails.env === 'production'
    Rails.application.config.session_store :cookie_store, key: '_rails-react-recipe', domain: 'some-domain'
else
    Rails.application.config.session_store :cookie_store, key: '_rails-react-recipe'
end