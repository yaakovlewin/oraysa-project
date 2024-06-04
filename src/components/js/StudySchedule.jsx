import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import axios from "axios";
// js imports
import masechtot from "../../js/masectot";
import getDates from "../../js/getDates";
import gematria from "../../js/letter2-gematria";
import Selection from "./Selection";
import Calendar from "./Calendar";
import generateDates from "../../js/datesGenerator";

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
    const [error, setError] = useState(null);

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
        generateDates(selectedMonth, selectedYear)
            .then((fetchedDays) => {
                setDays(fetchedDays);
                setError(null); // Clear any previous errors
            })
            .catch((error) => {
                const genericErrorMessage =
                    "An error occurred while fetching the days. Please try again later.";
                const networkErrorMessage =
                    "An error occurred while fetching the days. Please check your network or try again later.";

                if (axios.isAxiosError(error)) {
                    const { response } = error;
                    if (response) {
                        const { data, status } = response;
                        const errorMessage = `An error occurred while fetching the days. Status: ${status}. Error: ${data}`;
                        setError(errorMessage); // Set the error message with status and data
                    } else {
                        setError(genericErrorMessage); // Set a generic error message
                    }
                } else {
                    setError(networkErrorMessage); // Set a generic error message
                }
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
        const foundDay = days.find(
            (day) => DateTime.fromJSDate(selectedDate).toISODate() === day.date
        );
        setSelectedDay(foundDay ? foundDay : null);
    }, [selectedDate, days]);

    const scrolToSelectedDay = () => {
        if (selectedDay) {
            const dayElement = document.getElementById(selectedDay.date);
            if (dayElement) {
                dayElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div className="flex-row py-4 mx-4">
            {error && <p>{error}</p>}
            <Selection
                selectedMasechta={selectedMasechta}
                selectedDaf={selectedDaf}
                selectedAmud={selectedAmud}
                dafim={dafim}
                handleSelectMasechta={handleSelectMasechta}
                handleSelectDaf={handleSelectDaf}
                handleSelectAmud={handleSelectAmud}
                scrolToSelectedDay={scrolToSelectedDay}
                selectedDay={selectedDay}
            />
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
                setSelectedDay={setSelectedDay}
            />
        </div>
    );
}

export default StudySchedule;
