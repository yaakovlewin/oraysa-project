import React, { useEffect, useState } from 'react';
import data from '../../js/data'
import calcDate from '../../js/calculateGeorgienDate';
import gematria from '../../js/letter2-gematria'
import Display from './Display';
import Calendar from './Calendar';
import Selection from './Selection';

function StudySchedule() {
    const [selectedMasechta, setSelectedMasechta] = useState("בחר מסכת");
    const [selectedDaf, setSelectedDaf] = useState("בחר דף");
    const [selectedAmud, setSelectedAmud] = useState(null)
    const [dafim, setDafim] = useState(0)
    const [hebDate, setHebDate] = useState('')
    const [gregorianDate, setGregorianDate] = useState('')

    const handleMasechta = (event) => {
        setSelectedMasechta(event.target.value);
    }
    const handleDaf = (event) => {
        setSelectedDaf(event.target.value);
        setSelectedAmud(0)
    }
    const handleAmud = (event) => {
        setSelectedAmud(event.target.value);
    }

    useEffect(() => {
        if (selectedMasechta !== "בחר מסכת") {
            setDafim(data.find((element) => element.name === selectedMasechta).pages)
            setSelectedDaf("ב")
            setSelectedAmud(0)
        } else {
            setDafim(0)
            setSelectedDaf("")
            setSelectedAmud(null)
        }
    }, [selectedMasechta])

    useEffect(() => {
        console.log(selectedMasechta, selectedDaf, selectedAmud)
        if (selectedMasechta !== "בחר מסכת" && selectedDaf !== "בחר דף" && selectedAmud !== "בחר עמוד") {
            let currentDate = calcDate(selectedMasechta, gematria(selectedDaf), Number(selectedAmud))
            setGregorianDate(currentDate.date)
            currentDate.hebDate.then((data) => { setHebDate(data.hebrew) })
        } else {
            setGregorianDate('')
            setHebDate('')
        }


    }, [selectedMasechta, selectedDaf, selectedAmud])


    return (
        <div className='block-flex py-4 '>
            <Selection selectedMasechta={selectedMasechta}
                selectedDaf={selectedDaf}
                selectedAmud={selectedAmud}
                handleMasechta={handleMasechta}
                handleDaf={handleDaf}
                handleAmud={handleAmud}
                dafim={dafim} />

            <Display hebDate={hebDate} gregorianDate={gregorianDate} selectedMasechta={selectedMasechta}
                selectedDaf={selectedDaf}
                selectedAmud={selectedAmud} />
            {/* <Calendar /> */}

        </div>
    );
}

export default StudySchedule;
