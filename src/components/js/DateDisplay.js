export default function DateDisplay({ hebDate, gregorianDate, hebrewDay, engDay }) {
    return (
        <section className='flex flex-col p-8 my-8 items-center border-2 border-sky-800 rounded-sm bg-gray-100 shadow-md'>
            <h4 className='text-sky-800 text-xl font-semibold p-1'>Hebrew Date:</h4>
            {hebDate && <p className=' text-md text-sky-600'>יום {hebrewDay}</p>}
            <p className='font-semibold text-md text-sky-600'>{hebDate}</p>
            <h4 className='text-sky-800 text-xl font-semibold mt-3 p-1'>Gregorian Date:</h4>
            <p className='text-sky-600'>{engDay}</p>
            <p className='text-sky-600'> {gregorianDate}</p>
        </section>
    )
}
