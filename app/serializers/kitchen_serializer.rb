class KitchenSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :zip_code
  has_one :user
end
