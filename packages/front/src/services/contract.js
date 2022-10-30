import axios from 'axios';

const getContract = async (contractId) => {
    return await axios.get(`http://localhost:3000/api/v1/contract/${contractId}`);
}

export { getContract };
