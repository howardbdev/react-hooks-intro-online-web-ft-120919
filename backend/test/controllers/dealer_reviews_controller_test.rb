require 'test_helper'

class DealerReviewsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @dealer_review = dealer_reviews(:one)
  end

  test "should get index" do
    get dealer_reviews_url, as: :json
    assert_response :success
  end

  test "should create dealer_review" do
    assert_difference('DealerReview.count') do
      post dealer_reviews_url, params: { dealer_review: { content: @dealer_review.content, rating: @dealer_review.rating } }, as: :json
    end

    assert_response 201
  end

  test "should show dealer_review" do
    get dealer_review_url(@dealer_review), as: :json
    assert_response :success
  end

  test "should update dealer_review" do
    patch dealer_review_url(@dealer_review), params: { dealer_review: { content: @dealer_review.content, rating: @dealer_review.rating } }, as: :json
    assert_response 200
  end

  test "should destroy dealer_review" do
    assert_difference('DealerReview.count', -1) do
      delete dealer_review_url(@dealer_review), as: :json
    end

    assert_response 204
  end
end
