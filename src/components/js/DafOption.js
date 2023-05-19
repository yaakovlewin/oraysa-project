import gimatria from '../../js/gimatria'

export default function DafOption({ dafim }) {
    const generateOptions = () => {
        const options = []
        for (let i = 2; i <= dafim; i++) {
            options.push(<option key={i} value={gimatria(i)}>{gimatria(i)}</option>)

        }
        return options;
    }



    return (
        <>
            {
                generateOptions()
            }
        </>
    )
}