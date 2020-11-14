class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :storage, :icon, :status, :notes
  has_one :kitchen
end
