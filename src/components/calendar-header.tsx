
interface I_CalendarHeader {
    children:React.ReactNode;
}
function CalendarHeader({children}:I_CalendarHeader) {
  return (
    <div className={`w-[360px] flex items-center justify-between`}>
      {children}
    </div>
  )
}

export default CalendarHeader

interface I_CalendarHeaderButton extends React.ComponentPropsWithoutRef<'button'> {
  className?: string;
}
function CalendarHeaderButton({children,...props}:I_CalendarHeaderButton) {
    return (
      <button {...props}>
        {children}
      </button>
    )
  }
  
  export {CalendarHeaderButton}