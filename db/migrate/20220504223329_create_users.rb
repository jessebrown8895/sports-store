class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :address
      t.integer :age
      t.string :email
      t.string :password_digest
      t.string :username
      t.integer :role
      t.timestamps
    end
  end
end
