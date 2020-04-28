class CarsController < ApplicationController
  before_action :set_car, only: [:show, :update, :destroy]

  # GET /cars
  def index
    @cars = Car.all

    render json: @cars
  end

  # GET /cars/1
  def show
    render json: @car
  end

  # POST /cars
  def create
    @car = Car.new(car_params)

    if @car.save
      render json: @car, status: :created
    else
      render json: error_message, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cars/1
  def update
    if @car.update(car_params)
      render json: @car
    else
      render json: error_message, status: :unprocessable_entity
    end
  end

  # DELETE /cars/1
  def destroy
    if @car.destroy
    render json: {
      message: "Car destroyed."
    }
    else
      render json: {
        error: "Car not destroyed.  This thing is invincible."
      }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_car
      @car = Car.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def car_params
      params.require(:car).permit(:make, :model, :year, :miles, :price, :used)
    end

    def error_message
      {
        error: @car.errors.full_messages.to_sentence
      }
    end
end
