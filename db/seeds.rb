# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Cleaning database..."
CultureType.destroy_all
Applicant.destroy_all
Company.destroy_all
Match.destroy_all

puts "Creating culture types..."
modern = CultureType.create!(name: "Modern")
traditional = CultureType.create!(name: "Traditional")

puts "Created #{modern.name}"
puts "Created #{traditional.name}"

applicants = [
  { first_name: "John", last_name: "Doe", culture_type: modern },
  { first_name: "Jane", last_name: "Smith", culture_type: modern },
  { first_name: "Alice", last_name: "Johnson", culture_type: traditional }
]

applicants.each do |applicant_attrs|
  culture_type = applicant_attrs.delete(:culture_type)
  applicant = Applicant.create!(applicant_attrs.merge(culture_type: culture_type))
  puts "Created #{applicant.first_name} #{applicant.last_name}"
end

companies = [
  { name: "Empion", culture_type: modern },
  { name: "Henkel", culture_type: traditional },
  { name: "Spotify", culture_type: modern }
]

companies.each do |company_attrs|
  culture_type = company_attrs.delete(:culture_type)
  company = Company.create!(company_attrs.merge(culture_type: culture_type))
  puts "Created #{company.name}"
end

applicants = Applicant.all
companies = Company.all

puts "Creating matches..."
applicants.each do |applicant|
  companies.each do |company|
    if applicant.culture_type == company.culture_type
      Match.create!(applicant_id: applicant.id, company_id: company.id)
      puts "Created match between #{applicant.first_name} and #{company.name}"
    end
  end
end

puts "Finished!"
