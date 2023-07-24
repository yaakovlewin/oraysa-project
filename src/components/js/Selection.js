import Masechtot from "./Masechtot"
import DafOption from "./DafOption"
function Selection({
    selectedMaesechta,
    selectedDaf,
    selectedAmud,
    handleMasechta,
    handleDaf,
    handleAmud,
    dafim
}) {
    return (
        <section className='border-2 flex space-x-4 py-4 px-10 bg-zinc-200 items-center'>
            <label className='text-sky-800 font-semibold' htmlFor="option-select">Select a Amud:</label>
            <select className=' rounded p-1 w-28 bg-sky-700 text-zinc-100 border border-gray-800 hover:d' id="option-select1" value={selectedMaesechta} onChange={handleMasechta}>
                <Masechtot />
            </select>
            <select className='p-1 w-16 rounded bg-sky-700 text-zinc-100 border border-gray-800' id="option-select2" value={selectedDaf} onChange={handleDaf} placeholder='מסכת' >
                <DafOption dafim={dafim} />
            </select>
            <select value={selectedAmud} onChange={handleAmud} className='p-1 w-14 rounded bg-sky-700 text-zinc-100 border border-gray-800'>
                <option value={0}>ע"א</option>
                <option value={1}>ע"ב</option>
            </select>
        </section>
    )
}

export default Selection
