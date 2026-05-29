const GetLogin = async (loginData) => {
    if (!loginData?.email || !loginData?.password) {
        return Promise.reject(new Error('Email and password are required'));
    }

    return Promise.resolve({
        data: {
            id: 1,
            name: 'Admin User',
            role: 'Administrator',
            email: loginData.email,
        },
    });
};
  
const loginService = {
    GetLogin
};

export default loginService;
