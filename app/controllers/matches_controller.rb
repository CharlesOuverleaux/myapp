class MatchesController < ApplicationController
    def index
      @matches = Match.all
      render json: @matches
    end
  
    def show
      @match = Match.find(params[:id])
      render json: @match
    end
  
    def create
      @match = Match.new(match_params)
      if @match.save
        render json: @match, status: :created
      else
        render json: @match.errors, status: :unprocessable_entity
      end
    end
  
    def update
      @match = Match.find(params[:id])
      if @match.update(match_params)
        render json: @match
      else
        render json: @match.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @match = Match.find(params[:id])
      @match.destroy
      head :no_content
    end
  
    private
  
    def match_params
      params.require(:match).permit(:applicant_id, :company_id)
    end
  end
