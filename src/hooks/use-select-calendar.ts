import { useState } from 'react'
import dayjs from 'dayjs';

interface I_UseSelectCalendar {
    defaultYear:number;
    defaultMonth:number;
}

function useSelectCalendar({defaultYear,defaultMonth}:I_UseSelectCalendar) {
    const [year, setYear] = useState(defaultYear)
    const [month, setMonth] = useState(defaultMonth)
    const [startDate, setStartDate] = useState<string|null>(null)
    const [endDate, setEndDate] = useState<string|null>(null)

    const handleSelectDate = (dateValue:string) => {
    const selectedDate  = dayjs(dateValue)
    if(!startDate){
        setStartDate(dateValue)
    } else {
        if(selectedDate.isSame(startDate) || selectedDate.isAfter(startDate)){
        setEndDate(dateValue);
        } else if(selectedDate.isBefore(startDate)){
        setStartDate(dateValue)
        }
    }
    }

    const handleChooseMonth = (number:number) => {
    const calcMonth = month + number;
    if(calcMonth > 11 ) {
        setMonth(0)
        setYear(prev=> prev + 1)
    } else if(calcMonth < 0) {
        setMonth(11)
        setYear(prev=> prev - 1)
    } else {
        setMonth(prev => prev + number)
    }
    }
  
    return (
    {year, month, startDate, endDate, handleChooseMonth, handleSelectDate}
  )
}

export default useSelectCalendar
