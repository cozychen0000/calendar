interface I_CalendarRoot {
    children:React.ReactNode;
    className?:string;
}

function CalendarRoot({children,className}:I_CalendarRoot) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default CalendarRoot
