class Api::V1::UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find(params[:id])
        render json:@user
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render json: { Done: {}}, status: 200
        else
            render error: { error: 'Unable to create user.'}, status: 400
        end
    end

    def authenticate
        @user =  User.find_by(email: params[:email], password: params[:password])
        if @user
            render json: { email: @user.email, name: @user.name, user_id: @user.id }, status: 200
        else
            render json: { error: 'Authentication failed'}, status: 400
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :name)
    end

end
