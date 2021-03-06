class UsersController < ApplicationController
    def index
        @users = User.all
        if @users
            render json: {
                users: @users
            }
        else
            render json: {
                status: 500,
                messages: ['no users found']
            }
        end
    end

    def show:
        @user = User.find(params[:id])
        if @user
            render json: {
                user: @user
            }
        else
            render json: {
                status: 404,
                messages: ['user not found']
            }
        end
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!
            render json: {
                status: :created,
                user: @user
            }
        else 
            render json: {
                status: 500, 
                messages: User.errors.full_messages
            }
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end