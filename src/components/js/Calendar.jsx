import MonthView from "./MonthView";

export default function Calendar({
    selectedDate,
    selectedMonth,
    selectedYear,
    selectedDay,
    setSelectedDate,
    setSelectedMonth,
    setSelectedYear,
    setSelectedMasechta,
    setSelectedDaf,
    setSelectedAmud,
    days,
}) {
    return (
        console.log(selectedDate),
        (
            <section className=" bg-white w-full mt-20">
                <MonthView
                    selectedDate={selectedDate}
                    selectedMonth={selectedMonth}
                    selectedYear={selectedYear}
                    selectedDay={selectedDay}
                    setSelectedDate={setSelectedDate}
                    setSelectedMonth={setSelectedMonth}
                    setSelectedYear={setSelectedYear}
                    // setSelectedMasechta={setSelectedMasechta}
                    // setSelectedDaf={setSelectedDaf}
                    // setSelectedAmud={setSelectedAmud}
                    days={days}
                />
            </section>
        )
    );
}
