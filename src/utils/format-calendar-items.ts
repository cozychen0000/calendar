import dayjs from "dayjs";
interface I_CurMonthDateList {
    id:string;
    disabled:boolean;
    date:number
  }

  interface I_FormatCalendarItems {
    year:number;
    curMonth:string;
  }

function formatCalendarItems({year,curMonth}: I_FormatCalendarItems) {
    const firstDayInMonth = dayjs(`${year}-${curMonth}-01`)
    const lastDay = firstDayInMonth.endOf('month').date()
    const curMonthLastDay = dayjs(`${year}-${curMonth}-${lastDay}`)
    const firstDayWeek = firstDayInMonth.day()
    const lastDayWeek = curMonthLastDay.day()
    const preMonthLastDay = dayjs(`${year}-${+curMonth - 1}-01`).endOf('month').date()
    
    let curMonthDateList :I_CurMonthDateList[] = []

    // 當月日期
    for (let index = 0; index < lastDay; index++) {
    curMonthDateList.push({id:`${year}-${curMonth}-${index + 1}`,disabled: false, date:index + 1})
    }
    // 前一個月該出現的日期 
    const prevNewYear =  +curMonth - 1 === 0 ? year - 1 : year
    const prevNewMonth =  +curMonth - 1 === 0 ? '12' : String(+curMonth - 1).padStart(2, '0')
    const nextNewYear =  +curMonth + 1 === 13 ? year + 1 : year
    const nextNewMonth =  +curMonth + 1 === 13 ? '01' : String(+curMonth + 1).padStart(2, '0')

    for (let index = 0; index < firstDayWeek; index++) {
    curMonthDateList = [
        { id:`${prevNewYear}-${prevNewMonth}-${preMonthLastDay - index}`,disabled: true, date:preMonthLastDay - index}, 
        ...curMonthDateList
        ] 
    }
    // 後一個月該出現的日期
    const nextMonthLength = 6 - lastDayWeek;
    for (let index = 0; index < nextMonthLength; index++) {
    
    curMonthDateList = [
        ...curMonthDateList,
        {id:`${nextNewYear}-${nextNewMonth}-${index + 1}`,disabled: true, date:index + 1  }] 
    }

    return curMonthDateList
}

export default formatCalendarItems
