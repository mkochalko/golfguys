# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Player.create(name: 'Rory McIlroy', odds: 0.13333)
Player.create(name: 'Tiger Woods', odds: 0.1)
Player.create(name: 'Jon Rahm', odds: 0.09090909)
Player.create(name: 'Brooks Koepka', odds: 0.083333)
Player.create(name: 'Dustin Johnson', odds: 0.0714285)
Player.create(name: 'Justin Thomas', odds: 0.0714285)
Player.create(name: 'Patrick Cantlay', odds: 0.0454545)
Player.create(name: 'Xander Schauffele', odds: 0.0454545)
Player.create(name: 'Jordan Spieth', odds: 0.037037)
Player.create(name: 'Tony Finau', odds: 0.034482)
Player.create(name: 'Bubba Watson', odds: 0.032258)
Player.create(name: 'Jason Day', odds: 0.032258)
Player.create(name: 'Tommy Fleetwood', odds: 0.032258)
Player.create(name: 'Justin Rose', odds: 0.0303030)
Player.create(name: 'Rickie Fowler', odds: 0.0303030)
Player.create(name: 'Webb Simpson', odds: 0.0303030)
Player.create(name: 'Adam Scott', odds: 0.02777777)
Player.create(name: 'Patrick Reed', odds: 0.02777777)
Player.create(name: 'Bryson DeChambeau', odds: 0.0243902)
# Player.create(name: 'Collin Morikawa', odds: 0.0243902)
Player.create(name: 'Hideki Matsuyama', odds: 0.0243902)
Player.create(name: 'Louis Oosthuizen', odds: 0.02)
Player.create(name: 'Marc Leishman', odds: 0.02)
Player.create(name: 'Paul Casey', odds: 0.02)
Player.create(name: 'Phil Mickelson', odds: 0.02)

User.create(username: 'Chowda', tier1: 'Tiger Woods', tier2: 'Brooks Koepka', tier3: 'Xander Schauffele', tier4: 'Tony Finau', tier5: 'Tommy Fleetwood', tier6: 'Marc Leishman')
User.create(username: 'Von', tier1: 'Rory McIlroy', tier2: 'Jon Rahm', tier3: 'Patrick Cantlay', tier4: 'Bubba Watson', tier5: 'Jason Day', tier6: 'Patrick Reed')
User.create(username: 'Jim', tier1: 'Dustin Johnson', tier2: 'Justin Rose', tier3: 'Adam Scott', tier4: 'Bryson DeChambeau', tier5: 'Paul Casey', tier6: 'Marc Leishman')
User.create(username: 'John', tier1: 'Brooks Koepka', tier2: 'Dustin Johnson', tier3: 'Jordan Spieth', tier4: 'Patrick Reed', tier5: 'Louis Oosthuizen', tier6: 'Phil Mickelson')
User.create(username: 'Cus', tier1: 'Brooks Koepka', tier2: 'Justin Thomas', tier3: 'Rickie Fowler', tier4: 'Patrick Reed', tier5: 'Hideki Matsuyama', tier6: 'Louis Oosthuizen')