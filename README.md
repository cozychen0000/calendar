# React + TypeScript + Vite

# 日曆日期選擇器

## 簡介

這個專案是一個簡單的日曆日期選擇器，使用 React、Day.js 和 Tailwind CSS 架構，可以透過 Compound Pattern 實作，增加其靈活性。它允許用戶選擇一個日期範圍，並高亮顯示。

## 安裝

1. clone：

    ```bash
    git clone https://github.com/cozychen0000/calendar.git
    ```

2. 進入專案目錄：

    ```bash
    cd calendar
    ```

3. 安裝依賴：

    ```bash
    pnpm i
    ```
  注意: 若無法成功下載，請先將 lock 檔移除，再重新安裝

## 使用方法

1. 啟動開發伺服器：

    ```bash
    pnpm dev
    ```

2. 打開瀏覽器並導航至 `http://localhost:5173` 來查看日曆日期選擇器。

## 專案結構

- `src/App.js`: 包含日曆邏輯和 UI 的主要應用組件。
- `src/components/calendar-content.js`: 包含渲染日期的 `CalendarContent` 和 `CalendarContentButton` components。
- `src/components/calendar-header.js`: 包含渲染日曆標題的 `CalendarHeader` 和 `CalendarHeaderButton` components。
- `src/hooks/use-select-calendar.js`: 管理日期選擇狀態和邏輯的自定義 hook。
- `src/utils/format-calendar-items.js`: 用於格式化日曆項目的實用 function。

## 組件

### `CalendarRoot`

包裹日曆標題和內容的根組件。

### `CalendarHeader`

顯示當前年和月，以及用於在月份間導航的按鈕的標題組件。

### `CalendarHeaderButton`

在 `CalendarHeader` 中用於導航月份的按鈕組件。

### `CalendarContent`

顯示當前月份日期的內容組件。

### `CalendarContentButton`

在 `CalendarContent` 中用於每個日期的按鈕組件。

## Hooks

### `useSelectCalendar`

處理日曆狀態的自定義 hook，包括所選年份、月份、開始日期和結束日期。它提供了處理日期選擇和月份導航的函數。

## 實用函數

### `formatCalendarItems`

根據給定的年份和月份格式化日曆，顯示該月份與該行的前後月日期的 function。


## 問題 1~ 6 分別放在 utils 的 question 中
