import requests
from bs4 import BeautifulSoup
from datetime import datetime
import json
import os
# Python이 실행될 때 DJANGO_SETTINGS_MODULE이라는 환경 변수에 현재 프로젝트의 settings.py파일 경로를 등록합니다.
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "websaver.settings")
# 이제 장고를 가져와 장고 프로젝트를 사용할 수 있도록 환경을 만듭니다.
import django
django.setup()

from parsed_data.models import BigData



def parse_blog():
    # 최근기사 불러오는 url
    req = requests.get("https://www.jecheon.go.kr/site/corona01/index.html")
    html = req.content.decode('utf8')
    soup = BeautifulSoup(html, 'html.parser')
    news_titles = soup.select('#route > div > div:nth-child(5) > table > tbody > tr ')
    data= {}
    

    for a in news_titles:
        # a의 주소를 불러온다.)
        data[b] = a.text
        for t,l in data.items():
            BigData(title=t, content=l).save()
    return data

    

    # 데이터를 json으로 저장하는 방법
    # with open(os.path.join(BASE_DIR, 'result.json'), 'w+') as json_file:
    # json.dump(data, json_file)


# 파이썬 상에서 BlogData 모델의 저장하는 방식
if __name__=='__main__':
    parse_blog()


    # for t, l in blog_data_dict.items():
    #     print(t,l)



