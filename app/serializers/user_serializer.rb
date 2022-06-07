class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :nickname, :password_digest
end
