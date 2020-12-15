# section 02-4
# 파이썬 크롤링 기초
# lxml(2)
import json

import requests
from lxml.html import fromstring, tostring
import os
# Python이 실행될 때 DJANGO_SETTINGS_MODULE이라는 환경 변수에 현재 프로젝트의 settings.py파일 경로를 등록합니다.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'websaver.settings')
# 이제 장고를 가져와 장고 프로젝트를 사용할 수 있도록 환경을 만듭니다.
import django
django.setup()

from parsed_data.models import BigData

def main():
    """
    네이버 메인 뉴스 스탠드 스크랩핑 메인함수
    """

    # 세션 사용
    session = requests.Session()

    # 스크랩핑 대상 URL
    response = session.get("https://www.jecheon.go.kr/site/corona01/index.html") # GET, POST

    # 이동경로 리스트 획득
    urls = scrape_news_list_page(response)

    # 딕셔너리 확인
    # print(urls)



def scrape_news_list_page(response):
    # URL 리스트 선언
    urls = {}

    # 태그 정보 문자열 저장
    root = fromstring(response.content)

    for a in root.xpath('//*[@id="route"]/div/div[2]/table/tbody/tr/td'):
        title, content = extract_contents(a)
        urls[title] = content
        # 문자열 추력
        # print(tostring(a, pretty_print=True))
        #딕셔너리 삽입.
            # 결과 출력
        for title,content in urls.items():
            print("{} : {}".format(title,content))
        # 파일 쓰기
        # 생략
    return urls

def extract_contents(dom):
    title = dom.get('data-content')
    content = dom.text

    return title, content



# 스크래핑 시작
if __name__== "__main__":
    main()

