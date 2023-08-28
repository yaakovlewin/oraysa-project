import MasechtotOptions from "./MasechesOption";
import DafOption from "./DafOption";

import gematria from "../../js/letter2-gematria";

function Selection({
    selectedMasechta,
    selectedDaf,
    selectedAmud,
    handleSelectMasechta,
    handleSelectDaf,
    handleSelectAmud,
    dafim,
}) {
    return (
        <>
            <section className=" border-2 m-auto flex flex-col space-x-4 py-4 px-10 bg-zinc-200 items-center sm:flex-row sm:w-auto justify-center">
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
                    onChange={handleSelectMasechta}
                    className=" text-center rounded p-1 py-2 m-2 w-28 bg-sky-700 text-zinc-100 border border-gray-800 hover:d"
                >
                    <MasechtotOptions />
                </select>
                <select
                    value={selectedDaf}
                    onChange={handleSelectDaf}
                    className=" text-center p-1 py-2 m-2 w-28 rounded bg-sky-700 text-zinc-100 border border-gray-800"
                >
                    <DafOption dafim={dafim} />
                </select>
                <select
                    value={selectedAmud}
                    onChange={handleSelectAmud}
                    className=" text-center p-1 py-2 m-2 w-28 rounded bg-sky-700 text-zinc-100 border border-gray-800"
                >
                    <option value={"בחר עמוד"}>בחר עמוד</option>
                    <option value={1}>ע"א</option>
                    {gematria(selectedDaf) <= Math.floor(dafim) && (
                        <option value={2}>ע"ב</option>
                    )}
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
