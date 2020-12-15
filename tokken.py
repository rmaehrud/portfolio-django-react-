import requests
import json

url = "https://kauth.kakao.com/oauth/token" #url

data = {
    "grant_type" : "authorization_code",
    "client_id" : "df340b35b08e36a4a7efeb9cdb70ad63",
    "redirect_uri" : "http://localhost:8000/index/",
    "code"         : "EXnaXEfug2KoGLyNx_ZvIZazpoqJ5O1oKYqALnfP_8-d5TXX4_fvBpJ9o8svVG1FPLEunAorDKgAAAF2XEjbUg"
}#데이터
response = requests.post(url, data=data) # url과 데이터를 post 요청을 해주었음

tokens = response.json() #json 형태로 응답 요청

print(tokens)#토큰출력