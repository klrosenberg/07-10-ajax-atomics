require "sinatra"

get "/" do
  erb :"home"
end

get "/:msg" do
  message = params["msg"]
  first_char = message[0]
  
  if ('A'..'Z').include?(first_char)
    @response_message = "You wrote #{message}. Is that someone's name?"
  elsif ("0".."9").include?(first_char)
    @response_message = "You wrote #{message}. Is that how old you are?"
  else
    @response_message = "You wrote #{message}. Whatever."
  end
  erb :"message"
end
