import MasechtotOptions from "./MasechesOption";
import DafOption from "./DafOption";
function Selection({
    selectedMasechta,
    selectedDaf,
    selectedAmud,
    handleMasechta,
    handleDaf,
    handleAmud,
    dafim,
    twoAmudim,
}) {
    return (
        <>
            <section className=" w-72 border-2 flex flex-col space-x-4 py-4 px-10 bg-zinc-200 items-center sm:flex-row sm:w-auto">
                <label
                    htmlFor="option-select"
                    className="text-sky-800 font-semibold p-1 m-2"
                >
                    Select a
                    {selectedMasechta !== "בחר מסכת" &&
                        selectedDaf !== "בחר דף" &&
                        selectedAmud !== "בחר עמוד" &&
                        ` new`}{" "}
                    Amud:
                </label>
                <select
                    value={selectedMasechta}
                    onChange={handleMasechta}
                    className=" text-center rounded p-1 py-2 m-2 w-28 bg-sky-700 text-zinc-100 border border-gray-800 hover:d"
                >
                    <MasechtotOptions />
                </select>
                <select
                    value={selectedDaf}
                    onChange={handleDaf}
                    className=" text-center p-1 py-2 m-2 w-28 rounded bg-sky-700 text-zinc-100 border border-gray-800"
                >
                    <DafOption dafim={dafim} />
                </select>
                <select
                    value={selectedAmud}
                    onChange={handleAmud}
                    className=" text-center p-1 py-2 m-2 w-28 rounded bg-sky-700 text-zinc-100 border border-gray-800"
                >
                    <option value={"בחר עמוד"}>בחר עמוד</option>
                    <option value={1}>ע"א</option>
                    {twoAmudim && <option value={2}>ע"ב</option>}
                </select>
            </section>
            {selectedMasechta !== "בחר מסכת" &&
                selectedDaf !== "בחר דף" &&
                selectedAmud !== "בחר עמוד" && (
                    <p className=" text-sky-700 text-center p-1">
                        You have selected {selectedMasechta} דף {selectedDaf}{" "}
                        {selectedAmud === 1 ? 'ע"א' : 'ע"ב'}
                    </p>
                )}
        </>
    );
}

export default Selection;
