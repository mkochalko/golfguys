@players.each do |player|
    json.set! player.id do 
        json.extract! player, :id, :name, :odds
    end
end