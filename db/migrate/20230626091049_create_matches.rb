class CreateMatches < ActiveRecord::Migration[7.0]
  def change
    create_table :matches do |t|
      t.references :applicant, foreign_key: { to_table: :applicants }
      t.references :company, foreign_key: { to_table: :companies }

      t.timestamps default: -> { 'CURRENT_TIMESTAMP' },
                   null: false,
                   precision: 6,
                   comment: 'Created and updated timestamps in ISO8601 format'
    end
  end
end
