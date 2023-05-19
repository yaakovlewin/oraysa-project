import React, { useEffect, useState } from 'react';
import '../../js/gimatria'
import MasechesOption from './MasechesOption';
import data from '../../js/data'
import DafOption from './DafOption';
import calcDate from '../../js/calc-dafim2date-main';
import daf2num from '../../js/letter-to-num'

function OptionSelector() {
    const [selectedOption1, setSelectedOption1] = useState("ברכות");
    const [selectedOption2, setSelectedOption2] = useState("ב");
    const [dafim, setDafim] = useState(0)
    const [date, setDate] = useState('')

    const handleOptionChange1 = (event) => {
        setSelectedOption1(event.target.value);
    }
    const handleOptionChange2 = (event) => {
        setSelectedOption2(event.target.value);
    }

    useEffect(() => {
        setDafim(data.find((element) => element.name === selectedOption1).pages)
    }, [selectedOption1])

    useEffect(() => {
        console.log(selectedOption2)
        let currentDate = calcDate(selectedOption1, daf2num(selectedOption2))
        currentDate.then((data) => { setDate(`${data.hd} ${data.hm} ${data.hy}`) })

    }, [selectedOption1, selectedOption2])


    return (
        <div className='block-flex space-x-4 py-4 px-10 '>
            <label htmlFor="option-select">Select an option:</label>
            <select className=' rounded p-1 w-24 bg-zinc-200 border border-gray-800' id="option-select1" value={selectedOption1} onChange={handleOptionChange1}>
                <MasechesOption />
            </select>
            <select className='p-1 w-14 rounded bg-zinc-200 border border-gray-800' id="option-select2" value={selectedOption2} onChange={handleOptionChange2}>
                <DafOption dafim={dafim} />
            </select>
            <p className='text-sky-800  py-4'>You have selected: <em>{selectedOption1} דף {selectedOption2}</em></p>
            <p>you {date}</p>
        </div>
    );
}

export default OptionSelector;
