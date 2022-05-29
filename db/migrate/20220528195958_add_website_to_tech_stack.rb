class AddWebsiteToTechStack < ActiveRecord::Migration[6.1]
  def change
    add_column :tech_stacks, :website, :string
  end
end
