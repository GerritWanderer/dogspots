# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130307202510) do

  create_table "comments", :force => true do |t|
    t.integer  "spot_id"
    t.integer  "user_id"
    t.text     "text"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.integer  "reported"
  end

  add_index "comments", ["spot_id"], :name => "index_comments_on_spot_id"
  add_index "comments", ["user_id"], :name => "index_comments_on_user_id"

  create_table "ratings", :force => true do |t|
    t.integer  "spot_id"
    t.integer  "user_id"
    t.integer  "ground",     :default => 0
    t.integer  "water",      :default => 0
    t.integer  "clean",      :default => 0
    t.integer  "play",       :default => 0
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

  add_index "ratings", ["spot_id"], :name => "index_ratings_on_spot_id"
  add_index "ratings", ["user_id"], :name => "index_ratings_on_user_id"

  create_table "spot_images", :force => true do |t|
    t.integer  "spot_id"
    t.integer  "user_id"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "spot_images", ["spot_id"], :name => "index_spot_images_on_spot_id"

  create_table "spots", :force => true do |t|
    t.integer  "user_id"
    t.string   "title"
    t.text     "text"
    t.string   "street"
    t.integer  "zip"
    t.string   "city"
    t.string   "latitude"
    t.string   "longitude"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "email",                  :default => "", :null => false
    t.string   "name",                   :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
    t.string   "authentication_token"
    t.integer  "is_guest",               :default => 1
    t.float    "latitude"
    t.float    "longitude"
  end

  add_index "users", ["authentication_token"], :name => "index_users_on_authentication_token", :unique => true
  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
