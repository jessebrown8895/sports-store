class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.text :comment
      t.integer :rating
      t.belongs_to :purchase, null: false, foreign_key: true

      t.timestamps
    end
  end
end
