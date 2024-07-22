import './App.css'
import CalendarContent, {CalendarContentButton} from './components/calendar-content'
import CalendarHeader ,{CalendarHeaderButton} from './components/calendar-header'
import dayjs from 'dayjs';
import useSelectCalendar from './hooks/use-select-calendar';
import formatCalendarItems from './utils/format-calendar-items';
import CalendarRoot from './components/calendar-root';
// import { SearchBox } from './utils/question/q6';
const now = new Date();
const defaultYear = now.getFullYear();
const defaultMonth = now.getMonth();
const defaultDate = now.getDate();
const months = ['01','02','03','04','05','06','07','08','09','10','11','12'] 


function App() {
  
  const {
    year, 
    month, 
    startDate, 
    endDate, 
    handleSelectDate,
    handleChooseMonth 
  } = useSelectCalendar({defaultYear,defaultMonth})

  const curMonth = months[month]

  const curMonthDateList = formatCalendarItems({year, curMonth})
  const isinChooseDateRange = (date:string) => {
    const formatDate = dayjs(date)
    return (formatDate.isAfter(startDate) && formatDate.isBefore(endDate))
  } 
  const isSelectDate = (date:string) => {
    const formatDate = dayjs(date)
    return ((formatDate.isSame(startDate)||formatDate.isSame(endDate)))
  } 
  const isCurDate = (date:string) => {
    const formatDate = dayjs(date)
    const today = `${defaultYear}-${months[defaultMonth]}-${defaultDate}`
    return (dayjs(formatDate).isSame(today))
  }

  return (
    <>
      <CalendarRoot>
        <CalendarHeader>
          <CalendarHeaderButton onClick={()=>handleChooseMonth(-1)}>{'<'}</CalendarHeaderButton>
          {year}月{curMonth}日
          <CalendarHeaderButton onClick={()=>handleChooseMonth(+1)}>{'>'}</CalendarHeaderButton>  
        </CalendarHeader>
        <CalendarContent>
          {curMonthDateList.map((dateItem)=>(
            <CalendarContentButton
              className={
              `
              ${isSelectDate(dateItem.id) && 'bg-blue-600 text-white'}
              ${isinChooseDateRange(dateItem.id)&& 'bg-blue-600/50 text-white disabled:text-white'}
              ${isCurDate(dateItem.id) && 'bg-[#ffff76]'}
              `
            }
              key={dateItem.id}
              disabled={dateItem.disabled}
              onClick={()=>{handleSelectDate(`${year}-${curMonth}-${dateItem.date}`)}} 
            >
              {dateItem.date}日
            </CalendarContentButton>
          ))}
        </CalendarContent>
      </CalendarRoot>
    {/* <SearchBox/> */}
    </>
  )
}

export default App
