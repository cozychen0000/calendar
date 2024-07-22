/** Please write the sample code to debounce handleOnChange (Do not use
any 3th party libs other than react) **/

const debounceFn = ((fn:()=>void,delay:number) => {
    let timeoutId:ReturnType<typeof setTimeout>; 
    return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          fn();
        }, delay);
      };
})
const getDataFn = async() => {
    try {
        const res =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json()
        console.log('data',data)
        
    } catch (error) {
        console.log('error',error)
    }
}
const debouncedGetDataFn = debounceFn(getDataFn,500)

export const SearchBox = () => {
    const handleOnChange = () => {
    // make ajax call
    debouncedGetDataFn()
    };
    return <input className="border border-black" type="search" name="p" onChange={handleOnChange} />
    };