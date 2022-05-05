class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :category
      t.decimal :price
      t.integer :stock_quantity
      t.belongs_to :creator, null: false, foreign_key: {to_table: :users}
      t.text :description
      t.string :image_url

      t.timestamps
    end
  end
end
