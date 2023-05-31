import React, { useEffect, useState } from 'react';
import '../../js/gimatria'
import MasechesOption from './MasechesOption';
import data from '../../js/data'
import DafOption from './DafOption';
import calcDate from '../../js/calc-dafim2date-main';
import daf2num from '../../js/letter-to-num'
import Display from './Display';

function OptionSelector() {
    const [selectedOption1, setSelectedOption1] = useState("ברכות");
    const [selectedOption2, setSelectedOption2] = useState("ב");
    const [selectedAmud, setSelectedAmud] = useState(0)
    const [dafim, setDafim] = useState(0)
    const [hebDate, setHebDate] = useState('')
    const [gregorianDate, setGregorianDate] = useState('')

    const handleOptionChange1 = (event) => {
        setSelectedOption1(event.target.value);
    }
    const handleOptionChange2 = (event) => {
        setSelectedOption2(event.target.value);
    }
    const handleOptionChange3 = (event) => {
        setSelectedAmud(event.target.value);
    }

    useEffect(() => {
        setDafim(data.find((element) => element.name === selectedOption1).pages)
    }, [selectedOption1])

    useEffect(() => {
        let currentDate = calcDate(selectedOption1, daf2num(selectedOption2), Number(selectedAmud))
        setGregorianDate(currentDate.date)
        currentDate.hebDate.then((data) => { setHebDate(data.hebrew) })

    }, [selectedOption1, selectedOption2, selectedAmud])


    return (
        <div className='block-flex space-x-4 py-4 px-10 '>
            <label htmlFor="option-select">Select an option:</label>
            <select className=' rounded p-1 w-24 bg-zinc-200 border border-gray-800 hover:d' id="option-select1" value={selectedOption1} onChange={handleOptionChange1}>
                <MasechesOption />
            </select>
            <select className='p-1 w-14 rounded bg-zinc-200 border border-gray-800' id="option-select2" value={selectedOption2} onChange={handleOptionChange2} placeholder='מסכת' >
                <DafOption dafim={dafim} />
            </select>
            <select value={selectedAmud} onChange={handleOptionChange3} className='p-1 w-14 rounded bg-zinc-200 border border-gray-800'>
                <option value={0}>ע"א</option>
                <option value={1}>ע"ב</option>
            </select>
            <Display hebDate={hebDate} gregorianDate={gregorianDate} />

        </div>
    );
}

export default OptionSelector;
