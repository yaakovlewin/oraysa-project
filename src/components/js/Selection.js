import MasechtotOptions from "./MasechesOption"
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
            <label htmlFor="option-select" className='text-sky-800 font-semibold'>Select a Amud:</label>
            <select value={selectedMaesechta} onChange={handleMasechta} className=' text-center rounded p-1 w-28 bg-sky-700 text-zinc-100 border border-gray-800 hover:d'>
                <MasechtotOptions />
            </select>
            <select value={selectedDaf} onChange={handleDaf} className=' text-center p-1 w-28 rounded bg-sky-700 text-zinc-100 border border-gray-800'>
                <DafOption dafim={dafim} />
            </select>
            <select value={selectedAmud} onChange={handleAmud} className=' text-center p-1 w-28 rounded bg-sky-700 text-zinc-100 border border-gray-800'>
                <option value={null}>בחר עמוד</option>
                <option value={0}>ע"א</option>
                <option value={1}>ע"ב</option>
            </select>
        </section>
    )
}

export default Selection
