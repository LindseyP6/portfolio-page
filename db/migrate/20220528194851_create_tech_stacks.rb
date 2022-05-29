class CreateTechStacks < ActiveRecord::Migration[6.1]
  def change
    create_table :tech_stacks do |t|
      t.string :tech
      t.string :background_color
      t.string :image

      t.timestamps
    end
  end
end
