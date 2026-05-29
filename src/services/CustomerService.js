const GetCustomers = async () => {
    return Promise.resolve({
        data: [
            { id: 'CUS-1001', name: 'Green Valley Cooperative', type: 'Corporate', balance: '$12,450.00', status: 'Active' },
            { id: 'CUS-1002', name: 'City Retail Partners', type: 'Retail', balance: '$8,210.00', status: 'Active' },
            { id: 'CUS-1003', name: 'North Branch Society', type: 'Branch', balance: '$4,980.00', status: 'Review' },
            { id: 'CUS-1004', name: 'Union Savings Group', type: 'Corporate', balance: '$18,300.00', status: 'Active' },
        ],
    });
};

const customerService = {
    GetCustomers,
};

export default customerService;
