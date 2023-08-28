import { ClockIcon } from "@heroicons/react/20/solid";
import CalendarHeader from "./CalendarHeader";
import MonthCalendar from "./MonthCalendar";

function classNames(...classes) {
    // function to add multiple classes
    return classes.filter(Boolean).join(" ");
}

export default function MonthView({
    selectedDate,
    selectedMonth,
    selectedYear,
    selectedDay,
    setSelectedDate,
    setSelectedMonth,
    setSelectedYear,
    days,
}) {
    function handleDateChange(date) {
        setSelectedDate(date);
        setSelectedMonth(date.getMonth());
        setSelectedYear(date.getFullYear());
    }

    function handleMonthChange(month) {
        setSelectedMonth(month);
    }

    function handleYearChange(year) {
        setSelectedYear(year);
    }

    function handleDayClick(day) {
        let date = new Date(day.date);
        handleDateChange(date);
    }

    function handleDayDoubleClick(day) {
        console.log("double click " + day.date);
    }

    function handleDayRightClick(day) {
        console.log("right click " + day);
    }

    function handlePrevMonthClick() {
        if (selectedMonth === 0) {
            handleMonthChange(11);
            handleYearChange(selectedYear - 1);
        } else {
            handleMonthChange(selectedMonth - 1);
        }
    }

    function handleNextMonthClick() {
        if (selectedMonth === 11) {
            handleMonthChange(0);
            handleYearChange(selectedYear + 1);
        } else handleMonthChange(selectedMonth + 1);
        console.log(selectedMonth);
    }

    function handlePrevYearClick() {
        handleYearChange(selectedYear - 1);
    }

    function handleNextYearClick() {
        handleYearChange(selectedYear + 1);
    }

    function handleTodayClick() {
        handleDateChange(new Date());
    }

    return (
        <div className="lg:flex lg:h-full lg:flex-col">
            <CalendarHeader
                handlePrevMonthClick={handlePrevMonthClick}
                handleNextMonthClick={handleNextMonthClick}
                handlePrevYearClick={handlePrevYearClick}
                handleNextYearClick={handleNextYearClick}
                handleTodayClick={handleTodayClick}
                handleMonthChange={handleMonthChange}
                handleYearChange={handleYearChange}
                selectedMonth={selectedMonth}
                selectedYear={selectedYear}
                hebDate={
                    days.length > 0 && [
                        days[0].hebDate,
                        days[days.length - 1].hebDate,
                    ]
                }
            />
            <MonthCalendar
                days={days}
                handleDayClick={handleDayClick}
                handleDayDoubleClick={handleDayDoubleClick}
                handleDayRightClick={handleDayRightClick}
                selectedDay={selectedDay}
                classNames={classNames}
            />
            {(selectedDay?.events ?? []).length > 0 && (
                <div className="px-4 py-10 sm:px-6 lg:hidden">
                    <ol className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5">
                        {selectedDay.events.map((event) => (
                            <li
                                key={
                                    event.id ??
                                    (
                                        Math.random() * 1000000000000000000 +
                                        1
                                    ).toString()
                                }
                                className="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50"
                            >
                                <div className="flex-auto">
                                    <p className="font-semibold text-gray-900">
                                        {event.name ? event.name : event}
                                    </p>
                                    <time
                                        dateTime={event.datetime}
                                        className="mt-2 flex items-center text-gray-700"
                                    >
                                        <ClockIcon
                                            className="mr-2 h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        {event.time}
                                    </time>
                                </div>
                                <a
                                    href={event.href}
                                    className="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
                                >
                                    Edit
                                    <span className="sr-only">
                                        , {event.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
}
