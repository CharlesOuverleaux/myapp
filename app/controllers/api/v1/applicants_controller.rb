class Api::V1::ApplicantsController < ApplicationController
    def index
      @applicants = Applicant.all
      render json: @applicants
    end
  
    def show
      @applicant = Applicant.find(params[:id])
      render json: @applicant
    end
  
    def create
      @applicant = Applicant.new(applicant_params)
      if @applicant.save
        render json: @applicant, status: :created
      else
        render json: @applicant.errors, status: :unprocessable_entity
      end
    end
  
    def update
      @applicant = Applicant.find(params[:id])
      if @applicant.update(applicant_params)
        render json: @applicant
      else
        render json: @applicant.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @applicant = Applicant.find(params[:id])
      @applicant.destroy
      head :no_content
    end
  
    private
  
    def applicant_params
      params.require(:applicant).permit(:first_name, :last_name, :culture_type)
    end
  end
