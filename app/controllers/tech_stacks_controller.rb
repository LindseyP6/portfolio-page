class TechStacksController < ApplicationController

    def index 
        render json: TechStack.all, status: :ok
    end

    def show
        techs = TechStack.find(params[:id])
        render json: techs, status: :ok
    end    
end
