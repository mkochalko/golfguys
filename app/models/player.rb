class Player < ApplicationRecord
    validates :name, :odds, presence: true
    
end
