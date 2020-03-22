class User < ApplicationRecord
    validates :username, :tier1, :tier2, :tier3, :tier4, :tier5, :tier6, presence: true
    validates :username, uniqueness: true

    belongs_to :player_1,
        primary_key: :id,
        foreign_key: :tier1,
        class_name: :Player

    belongs_to :player_2,
        primary_key: :id,
        foreign_key: :tier2,
        class_name: :Player

    belongs_to :player_3,
        primary_key: :id,
        foreign_key: :tier3,
        class_name: :Player

    belongs_to :player_4,
        primary_key: :id,
        foreign_key: :tier4,
        class_name: :Player

    belongs_to :player_5,
        primary_key: :id,
        foreign_key: :tier5,
        class_name: :Player

    belongs_to :player_6,
        primary_key: :id,
        foreign_key: :tier6,
        class_name: :Player


end
