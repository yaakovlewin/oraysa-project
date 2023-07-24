import React, { useEffect, useState } from 'react';
import '../../js/gimatria'
import data from '../../js/data'
import calcDate from '../../js/calc-dafim2date-main';
import daf2num from '../../js/letter-to-num'
import Display from './Display';
import Calendar from './Calendar';
import Selection from './Selection';

function StudySchedule() {
    const [selectedMasechta, setSelectedMasechta] = useState("ברכות");
    const [selectedDaf, setSelectedDaf] = useState("ב");
    const [selectedAmud, setSelectedAmud] = useState(0)
    const [dafim, setDafim] = useState(0)
    const [hebDate, setHebDate] = useState('')
    const [gregorianDate, setGregorianDate] = useState('')

    const handleMasechta = (event) => {
        setSelectedMasechta(event.target.value);
    }
    const handleDaf = (event) => {
        setSelectedDaf(event.target.value);
    }
    const handleAmud = (event) => {
        setSelectedAmud(event.target.value);
    }

    useEffect(() => {
        setDafim(data.find((element) => element.name === selectedMasechta).pages)
    }, [selectedMasechta])

    useEffect(() => {
        let currentDate = calcDate(selectedMasechta, daf2num(selectedDaf), Number(selectedAmud))
        setGregorianDate(currentDate.date)
        currentDate.hebDate.then((data) => { setHebDate(data.hebrew) })

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

            <Display hebDate={hebDate} gregorianDate={gregorianDate} />
            {/* <Calendar /> */}

        </div>
    );
}

export default StudySchedule;
