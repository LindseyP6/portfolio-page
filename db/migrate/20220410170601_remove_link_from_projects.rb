class RemoveLinkFromProjects < ActiveRecord::Migration[6.1]
  def change
    remove_column :projects, :link
  end
end
