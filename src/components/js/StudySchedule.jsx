import React, { useEffect, useState } from "react";
import masechtot from "../../js/masectot";
import getDates from "../../js/getDates";
import gematria from "../../js/letter2-gematria";
import DateDisplay from "./DateDisplay";
import Selection from "./Selection";
import Calendar from "./Calendar";
import generateDates from "../../js/datesGenerator";
import { DateTime } from "luxon";

function StudySchedule() {
    const [selectedMasechta, setSelectedMasechta] = useState("בחר מסכת");
    const [selectedDaf, setSelectedDaf] = useState("בחר דף");
    const [selectedAmud, setSelectedAmud] = useState("בחר עמוד");
    const [dafim, setDafim] = useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(
        selectedDate.getFullYear()
    );
    const [days, setDays] = useState([]);
    const [selectedDay, setSelectedDay] = useState(false);

    const handleSelectMasechta = (event) => {
        setSelectedMasechta(event.target.value);
    };
    const handleSelectDaf = (event) => {
        setSelectedDaf(event.target.value);
        setSelectedAmud(1);
    };
    const handleSelectAmud = (event) => {
        setSelectedAmud(event.target.value);
    };
    useEffect(() => {
        console.log("fetching days");
        generateDates(selectedMonth, selectedYear)
            .then((fetchedDays) => setDays(fetchedDays))
            .catch((error) => {
                // Handle any errors from generateDates or setDays
                console.error(error);
            });
    }, [selectedMonth, selectedYear]);

    useEffect(() => {
        if (selectedMasechta !== "בחר מסכת") {
            setDafim(
                masechtot.find(({ name }) => name === selectedMasechta).pages +
                    1
            );
            setSelectedDaf("ב");
            setSelectedAmud(1);
        } else {
            setDafim(0);
            setSelectedDaf("");
            setSelectedAmud("בחר עמוד");
        }
    }, [selectedMasechta]);

    useEffect(() => {
        if (
            selectedMasechta !== "בחר מסכת" &&
            selectedDaf !== "בחר דף" &&
            selectedAmud !== "בחר עמוד"
        ) {
            let { date } = getDates(
                selectedMasechta,
                gematria(selectedDaf) - 1,
                Number(selectedAmud)
            );
            setSelectedDate(date);
            setSelectedMonth(date.getMonth());
            setSelectedYear(date.getFullYear());
        }
    }, [selectedMasechta, selectedDaf, selectedAmud]);

    useEffect(() => {
        console.log("selectedDate changed");
        const foundDay = days.find(
            (day) => DateTime.fromJSDate(selectedDate).toISODate() === day.date
        );
        setSelectedDay(foundDay ? foundDay : null);
    }, [selectedDate, days]);

    return (
        <div className="flex-row py-4 ">
            <Selection
                selectedMasechta={selectedMasechta}
                selectedDaf={selectedDaf}
                selectedAmud={selectedAmud}
                dafim={dafim}
                handleSelectMasechta={handleSelectMasechta}
                handleSelectDaf={handleSelectDaf}
                handleSelectAmud={handleSelectAmud}
            />

            {/* <DateDisplay
                hebDate={hebDate}
                gregorianDate={gregorianDate}
                hebrewDay={hebrewDay}
                engDay={engDay}
            /> */}
            <Calendar
                selectedDate={selectedDate}
                selectedMonth={selectedMonth}
                selectedYear={selectedYear}
                setSelectedDate={setSelectedDate}
                setSelectedMonth={setSelectedMonth}
                setSelectedYear={setSelectedYear}
                setSelectedMasechta={setSelectedMasechta}
                setSelectedDaf={setSelectedDaf}
                setSelectedAmud={setSelectedAmud}
                days={days}
                selectedDay={selectedDay}
            />
        </div>
    );
}

export default StudySchedule;
