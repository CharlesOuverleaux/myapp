class Api::V1::CulturesController < ApplicationController
    def index
        @culture_types = CultureType.all
        render json: @culture_types
    end
    
    def show
        @culture_type = CultureType.find(params[:id])
        render json: @culture_type
      end
end
