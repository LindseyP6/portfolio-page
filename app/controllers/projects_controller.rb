class ProjectsController < ApplicationController

    def index 
        render json: Project.all, status: :ok
    end

    def show
        projects = Project.find(params[:id])
        render json: projects, status: :ok
    end
end
