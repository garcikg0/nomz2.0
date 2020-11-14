class CreateKitchens < ActiveRecord::Migration[6.0]
  def change
    create_table :kitchens do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.string :city
      t.string :state
      t.string :zip_code

      t.timestamps
    end
  end
end
