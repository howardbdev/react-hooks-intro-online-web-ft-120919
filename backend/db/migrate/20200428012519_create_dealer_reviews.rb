class CreateDealerReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :dealer_reviews do |t|
      t.integer :rating
      t.string :content

      t.timestamps
    end
  end
end
