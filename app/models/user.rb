class User < ActiveRecord::Base
  has_many :spots
  has_many :ratings
  has_many :comments

  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :token_authenticatable
  before_save :ensure_authentication_token

  attr_accessible :name, :email, :password, :password_confirmation, :remember_me, :token_authenticatable
end
