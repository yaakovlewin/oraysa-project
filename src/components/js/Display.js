export default function Display({ hebDate, gregorianDate }) {
    return (
        <section className='flex flex-col py-8 items-center border-2 border-sky-800 m-8 rounded-sm bg-gray-100 shadow-md'>
            <h4 className='text-sky-800 text-xl font-semibold p-1'>Hebrew Date:</h4>
            <p className='font-semibold text-md text-sky-600'>{hebDate}</p>
            <h4 className='text-sky-800 text-xl font-semibold mt-3 p-1'>Gregorian Date:</h4>
            <p className='text-sky-600'> {gregorianDate}</p>
        </section>
    )
}
