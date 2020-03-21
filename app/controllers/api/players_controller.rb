class Api::PlayersController < ApplicationController
    def index
        @players = Player.all
    end
    

    private

    def player_params
        params.require(:player).permit(:id, :name, :odds)
    end

end
