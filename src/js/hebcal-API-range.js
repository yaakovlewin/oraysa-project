import axios from 'axios';

const convertDate = async (firstDate, lastDate) => {
    const url = `https://www.hebcal.com/converter?cfg=json&start=${firstDate}&end=${lastDate}&g2h=1&lg=he-x-NoNikud`;
    try {
        const response = await axios.get(url);
        if (response.status !== 200) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        return response.data;
    } catch (error) {
        // Handle any potential errors here
        console.error('Error:', error.message);
        throw error;
    }
};

export default convertDate;
