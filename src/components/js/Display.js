export default function Display({ hebDate, gregorianDate }) {
    return (
        <section className='flex py-8 justify-around '>
            {/* <p className='text-sky-800 '>Selected: <em>{selectedOption1} דף {selectedOption2} עמוד {selectedAmud ? 'ע"א' : 'ע"ב'}</em></p> */}
            <p className='text-sky-800'>Hebrew Date: {hebDate}</p>
            <p className='text-sky-800'>Gregorian Date: {gregorianDate}</p>
        </section>
    )
}
