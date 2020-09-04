class Api::UsersController < ApplicationController
    def index
        @users = User.all
        # debugger
        render :index
    end

    def show
        
    end

    def create
        @user = User.new(user_params)

        if @user.save!
            redirect_to '/api/users'
        else 
            render json:  @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:id, :username, :tier1, :tier2, :tier3, :tier4, :tier5, :tier6)
    end
end
