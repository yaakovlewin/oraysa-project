import data from '../../js/data'

export default function Masechtot() {
    return (
        <>{
            data.map(({ name }) => {
                return (
                    <option value={name} key={name}>{name}</option>
                )
            })
        }
        </>
    )
}
