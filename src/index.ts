export const getDateKo = (myDate:Date, type?: 'full' | 'no-year' | 'no-date') => {
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

export const compareCurrentDate = (myDate:Date) => {
  const nowDate = new Date();
  if (getDateKo(nowDate) === getDateKo(myDate)) return true;
  else return false;
};

export const getWeek = (myDate:Date) => {
  const dateNow = myDate.getDate();
  
  const newDate = new Date(myDate);
  newDate.setDate(1);

  const dayWeek = newDate.getDay();

  return Math.trunc(((dayWeek - 1) + dateNow) / 7) + 1;
};

export const dayTranslateKo = (day: number) => {
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


export const getLastTimeKo = (time: number) => {
  const nowDate = new Date().getTime();
  const timeDifference = nowDate - time;
  const agoStandard = timeDifference / (1000 * 60 * 60);
  const agoMins = Math.floor(timeDifference / (1000 * 60));
  const agoTimes = Math.floor(timeDifference / (1000 * 60 * 60));
  const agoDays = Math.floor(agoTimes / 24);
  if (agoStandard < 1 / 60) {
    return '방금 전';
  } else if (agoStandard < 1) {
    return `${agoMins}분 전`;
  } else if (agoStandard < 24) {
    return `${agoTimes}시간 전`;
  } else if (agoStandard >= 24) {
    return `${agoDays}일 전`;
  }
};
