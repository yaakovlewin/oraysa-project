import data from '../../js/data'

export default function MasechtotOptions() {
    return (
        <>
            <option value="בחר מסכת">בחר מסכת</option>
            {
                data.map(({ name }) => {
                    return (
                        <option value={name} key={name}>{name}</option>
                    )
                })
            }
        </>
    )
}
