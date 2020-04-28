class DealerReviewsController < ApplicationController
  before_action :set_dealer_review, only: [:show, :update, :destroy]

  # GET /dealer_reviews
  def index
    @dealer_reviews = DealerReview.all

    render json: @dealer_reviews
  end

  # GET /dealer_reviews/1
  def show
    render json: @dealer_review
  end

  # POST /dealer_reviews
  def create
    @dealer_review = DealerReview.new(dealer_review_params)

    if @dealer_review.save
      render json: @dealer_review, status: :created, location: @dealer_review
    else
      render json: @dealer_review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /dealer_reviews/1
  def update
    if @dealer_review.update(dealer_review_params)
      render json: @dealer_review
    else
      render json: @dealer_review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dealer_reviews/1
  def destroy
    @dealer_review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dealer_review
      @dealer_review = DealerReview.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def dealer_review_params
      params.require(:dealer_review).permit(:rating, :content)
    end
end
