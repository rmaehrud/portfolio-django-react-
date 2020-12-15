import json
import requests

# const kakao = {
#   clientID: "df340b35b08e36a4a7efeb9cdb70ad63",
#   clientSecret: "qUP1ovwmzyx9S659oKM04AXeoQJkaEYM",
#   redirect_uri="http://localhost:8000/index/"
#   code="FbJEE6ANXISFXdEB9hRu8honPq79u68orK1JCEInwDaa_gcakwXeaS6gw_dGUQ975bikZQopyWAAAAF2WvIakA"
# }
access_token="8zyFgaKPpDjbJ11HZXjD_YaG3HZZTFTh10AOlwo9dZsAAAF2XElaIA"
template_dict_data = str({
        "object_type": "text",
        "text": "충청북도 제천시 교통 동대구→제천 시외버스 - 12.5. 17:20~20:00(17:20 동대구에서 제천으로 오는 시외버스 탑승객분들은 보건소에서 검사바랍니다.)",
        "link": {
            "web_url": "https://www.jecheon.go.kr/site/corona01/index.html",
            "mobile_web_url": "https://www.jecheon.go.kr/site/corona01/index.html"
        },
        "button_title": "바로 확인"
})

kakao_to_me_uri = 'https://kapi.kakao.com/v2/api/talk/memo/default/send'
headers = {
    'Content-Type': "application/x-www-form-urlencoded",
    'Authorization': "Bearer " + access_token,
}
print(template_dict_data)

template_json_data = 'template_object=' + json.dumps(template_dict_data)
print(template_json_data)

template_json_data = template_json_data.replace("\"", "")
template_json_data = template_json_data.replace("'", "\"")

 
# response = requests.request(method="POST", url=kakao_to_me_uri, data=template_json_data, headers=headers)
# print(response.json())
	


