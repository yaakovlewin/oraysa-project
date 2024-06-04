import MasechtotOptions from "./MasechesOption";
import DafOption from "./DafOption";

import gematria from "../../js/letter2-gematria";

function classNames(...classes) {
    // function to add multiple classes
    return classes.filter(Boolean).join(" ");
}

function Selection({
    selectedMasechta,
    selectedDaf,
    selectedAmud,
    handleSelectMasechta,
    handleSelectDaf,
    handleSelectAmud,
    dafim,
    scrolToSelectedDay,
    selectedDay,
}) {
    return (
        <>
            <section className="border-2 m-auto flex flex-col space-x-4 py-4 px-10 bg-zinc-200 items-center sm:flex-row sm:w-auto justify-center">
                <section className=" ">
                    <label
                        htmlFor="masechtot-select"
                        className="text-center text-sky-700 font-semibold text-xl p-1 m-2"
                    >
                        Select a
                        {selectedMasechta !== "בחר מסכת" &&
                            selectedDaf !== "בחר דף" &&
                            selectedAmud !== "בחר עמוד" &&
                            ` new`}{" "}
                        Amud:
                    </label>
                    <select
                        id="masechtot-select"
                        value={selectedMasechta}
                        onChange={handleSelectMasechta}
                        className=" text-center rounded p-1 py-2 m-2 w-28 bg-sky-700 text-zinc-100 border border-gray-800 hover:d"
                    >
                        <MasechtotOptions />
                    </select>
                    <label htmlFor="daf-select" />
                    <select
                        id="daf-select"
                        value={selectedDaf}
                        onChange={handleSelectDaf}
                        className=" text-center p-1 py-2 m-2 w-28 rounded bg-sky-700 text-zinc-100 border border-gray-800"
                    >
                        <DafOption dafim={dafim} />
                    </select>
                    <label htmlFor="amud-select" />
                    <select
                        id="amud-select"
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

                <button
                    onClick={scrolToSelectedDay}
                    className={classNames(
                        selectedDay
                            ? "text-zinc-700 border border-orange-500"
                            : "text-zinc-300 border border-orange-300",
                        "border border-orange-400  p-1 py-2 m-2 rounded hover:bg-orange-400 hover:text-zinc-800 hover:border-orange-400 hover:shadow-lg hover:scale-110 transform transition-all duration-500 ease-in-out"
                    )}
                >
                    Scroll to selected day
                </button>
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
