import data from '../../js/data'

export default function MasechesOption() {
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
