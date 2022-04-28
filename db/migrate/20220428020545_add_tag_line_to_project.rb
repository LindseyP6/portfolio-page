class AddTagLineToProject < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :tag_line, :string
  end
end
