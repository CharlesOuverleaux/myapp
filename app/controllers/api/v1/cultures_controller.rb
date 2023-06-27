class Api::V1::CulturesController < ApplicationController
    def index
        @culture_types = CultureType.all
        render json: @culture_types
    end
    
    def show
        @culture_type = CultureType.find(params[:id])
        render json: @culture_type
    end

    def create
        @culture_type = CultureType.new(culture_type_params)
        if @culture_type.save
          render json: @culture_type, status: :created
        else
          render json: @culture_type.errors, status: :unprocessable_entity
        end
    end

    private

    def culture_type_params
        params.require(:culture).permit(:name)
    end
end
