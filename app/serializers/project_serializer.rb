class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :year_completed, :image, :demo_link, :github_link, :technologies, :tag_line
end
