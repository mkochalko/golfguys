@users.each do |user|
    json.set! user.id do 
        json.extract! user, :id, :username, :tier1, :tier2, :tier3, :tier4, :tier5, :tier6
    end
end