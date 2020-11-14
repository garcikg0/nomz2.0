# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_14_040648) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "icons", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image_link"
    t.string "ingredients"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ingredients", force: :cascade do |t|
    t.bigint "kitchen_id", null: false
    t.string "name"
    t.string "storage"
    t.string "icon"
    t.string "status"
    t.string "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["kitchen_id"], name: "index_ingredients_on_kitchen_id"
  end

  create_table "kitchens", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.string "city"
    t.string "state"
    t.string "zip_code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_kitchens_on_user_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.bigint "kitchen_id", null: false
    t.string "name"
    t.string "image"
    t.string "source"
    t.string "url"
    t.string "ingredient_lines"
    t.string "ingredients"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["kitchen_id"], name: "index_recipes_on_kitchen_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.string "bio"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "ingredients", "kitchens"
  add_foreign_key "kitchens", "users"
  add_foreign_key "recipes", "kitchens"
end
