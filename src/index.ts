const getDateKo = (myDate:Date, type?: 'full' | 'no-year' | 'no-date') => {
  const year = myDate.getFullYear();
  const month = (myDate.getMonth() + 1);
  const day = myDate.getDate();

  switch (type) {
    case 'full': return `${year}년 ${month}월 ${day}일`;
    case 'no-year': return `${month}월 ${day}일`;
    case 'no-date': return `${year}년 ${month}월`;
    default : return `${year}년 ${month}월 ${day}일`;
  }
};

const compareCurrentDate = (myDate:Date) => {
  const nowDate = new Date();
  return (
    myDate.getFullYear() === nowDate.getFullYear() &&
    myDate.getMonth() === nowDate.getMonth() &&
    myDate.getDate() === nowDate.getDate()
  )
};

const compareDate = (first: Date, sec: Date) => {
  return (
    first.getFullYear() === sec.getFullYear() &&
    first.getMonth() === sec.getMonth() &&
    first.getDate() === sec.getDate()
  )
};


const getWeek = (myDate:Date) => {
  const dateNow = myDate.getDate();
  
  const newDate = new Date(myDate);
  newDate.setDate(1);

  const dayWeek = newDate.getDay();

  return Math.trunc(((dayWeek - 1) + dateNow) / 7) + 1;
};

const dayTranslateKo = (day: number) => {
  switch (day) {
  case 0: return '일';
  case 1: return '월';
  case 2: return '화';
  case 3: return '수';
  case 4: return '목';
  case 5: return '금';
  case 6: return '토';
  }
};

const secToFullFormat = (sec: number) => {
  const newSec = sec % 60 < 10 ? '0' + sec % 60 : sec % 60;
  const newMinute = Math.floor(sec / 60) % 60 < 10 ? '0' + Math.floor(sec / 60) % 60 : Math.floor(sec / 60) % 60;

  return `${newMinute}:${newSec}`;
};

const getPassedTimeKo = (time: number) => {
  const nowDate = new Date().getTime();
  const timeDifference = nowDate - time;
  const passedSec = timeDifference / 1000;
  const passedMin = timeDifference / (1000 * 60);
  const passedTime = timeDifference / (1000 * 60 * 60);
  const passedDay = passedTime / 24;
  if (passedSec < 60) return '방금 전'
  else if (passedMin < 60) return `${Math.trunc(passedMin)}분 전`
  else if (passedTime < 24) return `${Math.trunc(passedTime)}시간 전`
  else return `${Math.trunc(passedDay)}일 전`
};

export { getDateKo, compareCurrentDate, compareDate, getWeek, dayTranslateKo, secToFullFormat, getPassedTimeKo }