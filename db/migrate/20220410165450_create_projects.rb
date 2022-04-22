class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.string :year_completed
      t.string :link
      t.string :image
      t.string :demo_link
      t.string :github_link

      t.timestamps
    end
  end
end
