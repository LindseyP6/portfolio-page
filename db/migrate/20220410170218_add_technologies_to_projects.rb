class AddTechnologiesToProjects < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :technologies, :string
  end
end
