# tuo-time-utils
Utils related to time and date (esm)

## Usage

### getDateKo
```
getDateKo(date: Date, 'full') // 'YYYY년 M월 D일'
getDateKo(date: Date, 'no-year') // 'M월 D일'
getDateKo(date: Date, 'no-date') // 'YYYY년 M월'
```

### compareCurrentDate
compare to current date without time
```
compareCurrentDate(date: Date)
return boolean
```

### getWeek
check what week it is
```
getWeek(date:Date)
return 1 | 2 | 3 | 4 | 5 | 6
```

### dayTranslateKo
day of the week in Korean
```
dayTranslateKo(day: Date.getDay())
return '일' | '월' | '화' | '수' | '목' | '금' | '토'
```

### getLastTimeKo
last time in Korean
```
getLastTimeKo(time: Date.getTime())
return '방금 전' | 'n분 전' | 'n시간 전' | n일 전
```