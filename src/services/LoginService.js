const GetLogin = async (email, password) => {
    if (!email || !password) {
        return Promise.reject(new Error('Email and password are required'));
    }

    return Promise.resolve({
        data: {
            id: 1,
            name: 'Admin User',
            role: 'Administrator',
            email,
        },
    });
};
  
const loginService = {
    GetLogin
};

export default loginService;
