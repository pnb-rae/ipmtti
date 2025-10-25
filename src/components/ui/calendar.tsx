import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date) => void;
  fromYear?: number;
  toYear?: number;
  className?: string;
  mode?: "single" | "multiple";
}

function Calendar({ 
  selected, 
  onSelect, 
  fromYear = 1900,
  toYear = new Date().getFullYear() + 10,
  className = "",
  mode = "single"
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    
    return { daysInMonth, startingDayOfWeek, year, month, prevMonthLastDay };
  };
  
  const { daysInMonth, startingDayOfWeek, year, month, prevMonthLastDay } = getDaysInMonth(currentMonth);
  
  const handleDayClick = (day: number) => {
    const newDate = new Date(year, month, day);
    onSelect?.(newDate);
  };
  
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(e.target.value);
    setCurrentMonth(new Date(year, newMonth, 1));
  };
  
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = parseInt(e.target.value);
    setCurrentMonth(new Date(newYear, month, 1));
  };
  
  const navigateMonth = (direction: number) => {
    const newDate = new Date(year, month + direction, 1);
    setCurrentMonth(newDate);
  };
  
  const isSelected = (day: number) => {
    if (!selected) return false;
    const date = new Date(year, month, day);
    return selected.toDateString() === date.toDateString();
  };
  
  const isToday = (day: number) => {
    const today = new Date();
    return today.getDate() === day && 
           today.getMonth() === month && 
           today.getFullYear() === year;
  };
  
  const days: JSX.Element[] = [];
  
  // Previous month's trailing days
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    const day = prevMonthLastDay - i;
    days.push(
      <button
        key={`prev-${day}`}
        className="h-9 w-9 text-gray-300 font-normal cursor-default"
        disabled
      >
        {day}
      </button>
    );
  }
  
  // Current month's days
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(
      <button
        key={day}
        onClick={() => handleDayClick(day)}
        className={`h-9 w-9 rounded-md font-normal transition-colors ${
          isSelected(day)
            ? 'bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-500'
            : isToday(day)
            ? 'bg-yellow-400 text-gray-900 font-semibold'
            : 'hover:bg-gray-100 text-gray-700'
        }`}
      >
        {day}
      </button>
    );
  }
  
  // Next month's leading days
  const totalCells = days.length;
  const remainingCells = 42 - totalCells; // 6 rows * 7 days
  for (let day = 1; day <= remainingCells; day++) {
    days.push(
      <button
        key={`next-${day}`}
        className="h-9 w-9 text-gray-300 font-normal cursor-default"
        disabled
      >
        {day}
      </button>
    );
  }
  
  const years: number[] = [];
  for (let y = fromYear; y <= toYear; y++) {
    years.push(y);
  }
  
  return (
    <div className={`bg-white rounded-lg shadow-lg border border-gray-200 p-3 w-80 ${className}`}>
      {/* Month/Year Navigation */}
      <div className="flex items-center justify-center pt-1 relative mb-4">
        <button
          onClick={() => navigateMonth(-1)}
          className="absolute left-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 inline-flex items-center justify-center rounded-md border border-gray-300 transition-opacity"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        
        <div className="flex gap-1">
          <select
            value={month}
            onChange={handleMonthChange}
            className="text-sm font-medium px-2 py-1 bg-transparent border border-gray-300 rounded focus:outline-none focus:border-gray-400 cursor-pointer"
          >
            {monthNames.map((name, idx) => (
              <option key={idx} value={idx}>{name}</option>
            ))}
          </select>
          
          <select
            value={year}
            onChange={handleYearChange}
            className="text-sm font-medium px-2 py-1 bg-transparent border border-gray-300 rounded focus:outline-none focus:border-gray-400 cursor-pointer"
          >
            {years.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
        
        <button
          onClick={() => navigateMonth(1)}
          className="absolute right-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 inline-flex items-center justify-center rounded-md border border-gray-300 transition-opacity"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      
      {/* Day Names */}
      <div className="flex w-full mt-2">
        {dayNames.map(day => (
          <div key={day} className="text-gray-500 rounded-md w-9 font-normal text-xs text-center">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar Days */}
      <div className="w-full border-collapse space-y-1 mt-2">
        <div className="flex w-full mt-2">
          {days.slice(0, 7)}
        </div>
        <div className="flex w-full mt-2">
          {days.slice(7, 14)}
        </div>
        <div className="flex w-full mt-2">
          {days.slice(14, 21)}
        </div>
        <div className="flex w-full mt-2">
          {days.slice(21, 28)}
        </div>
        <div className="flex w-full mt-2">
          {days.slice(28, 35)}
        </div>
        <div className="flex w-full mt-2">
          {days.slice(35, 42)}
        </div>
      </div>
    </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
export type { CalendarProps };