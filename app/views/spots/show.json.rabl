object @spot
attributes :id, :title, :text, :user_id
node :comments do |spot|
  [1,2,3]
end