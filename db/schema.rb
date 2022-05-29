# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_05_28_195958) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cats", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "gender"
    t.string "image"
    t.string "age"
    t.boolean "spay_neuter"
    t.boolean "tip"
    t.boolean "adopted"
    t.string "trap_date"
    t.string "trap_location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "tnr"
    t.boolean "fostered"
    t.string "special_notes"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "year_completed"
    t.string "image"
    t.string "demo_link"
    t.string "github_link"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "technologies"
    t.string "tag_line"
  end

  create_table "tech_stacks", force: :cascade do |t|
    t.string "tech"
    t.string "background_color"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "website"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "bio"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "visuals", force: :cascade do |t|
    t.string "image"
    t.string "instagram"
    t.string "video"
    t.integer "cat_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
