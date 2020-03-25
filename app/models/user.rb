class User < ApplicationRecord
    validates :username, :tier1, :tier2, :tier3, :tier4, :tier5, :tier6, presence: true
    validates :username, uniqueness: true


end
