import React, { useEffect, useState } from "react";
import data from "../../js/data";
import getDates from "../../js/getDates";
import gematria from "../../js/letter2-gematria";
import DateDisplay from "./DateDisplay";
import Calendar from "./Calendar";
import Selection from "./Selection";

function StudySchedule() {
    const [selectedMasechta, setSelectedMasechta] = useState("בחר מסכת");
    const [selectedDaf, setSelectedDaf] = useState("בחר דף");
    const [selectedAmud, setSelectedAmud] = useState("בחר עמוד");
    const [dafim, setDafim] = useState(0);
    const [hebDate, setHebDate] = useState("");
    const [gregorianDate, setGregorianDate] = useState("");
    const [engDay, setEngDay] = useState("");
    const [hebrewDay, setHebrewDay] = useState("");

    const handleMasechta = (event) => {
        setSelectedMasechta(event.target.value);
    };
    const handleDaf = (event) => {
        setSelectedDaf(event.target.value);
        setSelectedAmud(0);
    };
    const handleAmud = (event) => {
        setSelectedAmud(event.target.value);
    };

    useEffect(() => {
        if (selectedMasechta !== "בחר מסכת") {
            setDafim(
                data.find((element) => element.name === selectedMasechta).pages
            );
            setSelectedDaf("ב");
            setSelectedAmud(0);
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
            let { dateStr, hebDate, engDay, hebDay } = getDates(
                selectedMasechta,
                gematria(selectedDaf),
                Number(selectedAmud)
            );

            setGregorianDate(dateStr);
            hebDate.then((data) => {
                setHebDate(data.hebrew);
            });
            setEngDay(engDay);
            setHebrewDay(hebDay);
        } else {
            setGregorianDate("");
            setHebDate("");
            setEngDay("");
            setHebrewDay("");
        }
    }, [selectedMasechta, selectedDaf, selectedAmud]);

    return (
        <div className="block-flex py-4 ">
            <Selection
                selectedMasechta={selectedMasechta}
                selectedDaf={selectedDaf}
                selectedAmud={selectedAmud}
                handleMasechta={handleMasechta}
                handleDaf={handleDaf}
                handleAmud={handleAmud}
                dafim={dafim}
            />

            <DateDisplay
                hebDate={hebDate}
                gregorianDate={gregorianDate}
                hebrewDay={hebrewDay}
                engDay={engDay}
            />

            <Calendar />
        </div>
    );
}

export default StudySchedule;
