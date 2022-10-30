import axios from 'axios';

const simulate = async (from, to, data, value) => {
    let result = await axios.post(`http://localhost:3000/api/v1/tx/`,
    {
        from: from,
        to: to,
        data: data,
        value: value
    });
    return result
}

export { simulate };
