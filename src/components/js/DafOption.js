import gimatriaToLetter from '../../js/num2heb-Letter'

export default function DafOption({ dafim }) {
    const generateOptions = () => {
        const options = []
        for (let i = 2; i <= dafim; i++) {
            options.push(<option key={i} value={gimatriaToLetter(i)}>{gimatriaToLetter(i)}</option>)

        }
        return options;
    }



    return (
        <>
            <option value="בחר דף">בחר דף</option>
            {
                generateOptions()
            }
        </>
    )
}