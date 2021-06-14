# musicPlayer project

## Introduce

    react를 이용하여 간단한 music player 를 구현
    tools : html, css, typescript, react, express, aws

## components

    ### navbar
        - home( click event ) : 좋아요 순으로 내림차순 정렬하여 음악이 표시됨
        - rank( click event ) : 조회수(들은 횟수) 순으로 내림차순 정렬하여 음악이 표시됨
            - 각 장르( sidebar ) 클릭 시, 장르에 해당하는 음악들만 표시됨.
        - library ( click event ) : 내가 즐겨찾기에 추가된 음악들만 표시됨.
        - Search ( type & click event ) : 음악 이름을 알파벳 하나라도 일치하는것이 있다면 화면에 표시함

    ### main
        - 현재 navbar에서 활성화된 메뉴에 따라 선정된 음악들의 리스트와 각 정보가 표시됨
        - 각 음악의 정보는 서버로부터 전달받은 data로 표시됨.
            - https://musicdata.link
        - thumbs up ( click event ) : 클릭한 음악의 좋아요 횟수가 증가
        - ellipsis ( click event ) : 클릭시 각 음악의 세부 메뉴 버튼 활성화(on/off)
            - 재생 : 선택된 음악 재생(play bar(footer) 활성화)
            - 즐겨찾기에 담기 : 선택된 음악 library에 담기
            - 즐겨찾기에 삭제 : 선택된 음악 library에서 삭제

    ### footer
        - main component로 부터 전달 받은 음악을 재생 및 정보 표시
        - stop/play button에 따라 재생되는 음악 on/off
            - 실제 음악이 재생되는것은 아니고 data에 있는 시간 정보를 가져와서 시간만큼 progress bar 구현

