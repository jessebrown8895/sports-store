class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :address, :age, :email, :password_digest, :username
end
