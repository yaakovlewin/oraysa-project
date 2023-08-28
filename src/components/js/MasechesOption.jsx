import masechtot from "../../js/masectot";

export default function MasechtotOptions() {
    return (
        <>
            <option value="בחר מסכת">בחר מסכת</option>
            {masechtot.map(({ name }) => {
                return (
                    <option value={name} key={name}>
                        {name}
                    </option>
                );
            })}
        </>
    );
}
