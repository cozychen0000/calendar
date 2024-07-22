import React from 'react'
interface I_CalendarContent {
    children:React.ReactNode;
    className?:string;
}
function CalendarContent({children}:I_CalendarContent) {
  return (
    <div className='w-[360px] flex flex-wrap items-center py-3  border-t-0'>
      {children}
    </div>
  )
}

export default CalendarContent

interface I_CalendarContentButton extends React.ComponentPropsWithoutRef<'button'> {
    children:React.ReactNode;
    className?:string;
}
function CalendarContentButton({children,className ,...props}:I_CalendarContentButton) {
  return (
    <button 
      {...props} 
      className={`p-0 h-9 w-[calc(100%_/_7)] grow-0 shrink-0 disabled:cursor-not-allowed disabled:text-[#757575] ${className}`} 
    >
      {children}
    </button>
  )
}

export { CalendarContentButton}