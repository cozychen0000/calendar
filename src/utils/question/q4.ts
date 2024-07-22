// Can you explain about Interface and Enum, and where will you be using, please make some examples.

// Interface 
// Interface 是一種用來定義物件結構的方式，Interface 定義了一個物件有哪些屬性，以及這些屬性的型別。
// 介面可以用來約束一個物件必須符合的結構，這樣可以在開發過程中提供型別檢查，避免出現型別錯誤。

// ex: Interface 的用途
// 定義物件結構: 確保物件符合你的預設
// 強制實現方法: 當物件不符合定義則會有錯誤
// 提高程式可讀性 可以清楚的看出物件的所有屬性

interface I_UseSelectCalendar {
    defaultYear:number;
    defaultMonth:number;
}

const UseSelectCalendar:I_UseSelectCalendar = {
    defaultYear:2024,
    defaultMonth:7,
}
console.log(UseSelectCalendar.defaultYear,UseSelectCalendar.defaultMonth)

// Enum 
// Enum 它能夠把變數的範圍限制在某些限制下進行存取並賦予其定義，除了可讓程式碼更好維護之外更增加程式可讀性。
// ex: 
// 定義一組相關的常量: Enum 用來表示一組相關的常量，例如一週的七天、方向、顏色等。
// 提高代碼可讀性: 使用 Enum 可以使代碼更具可讀性，因為變數名稱比數值更加直觀。
// 避免沒有意義的數字常量: Enum 可以替代代碼中的有意義的數字常量，使代碼更加可維護。
// 使用枚舉來定義方向

enum Direction {
    Up,
    Down,
    Left,
    Right
  }
  
  function move(direction: Direction) {
    switch (direction) {
      case Direction.Up:
        console.log("Moving up");
        break;
      case Direction.Down:
        console.log("Moving down");
        break;
      case Direction.Left:
        console.log("Moving left");
        break;
      case Direction.Right:
        console.log("Moving right");
        break;
    }
  }
  
  move(Direction.Up); // 這樣比直接用數字更加清晰