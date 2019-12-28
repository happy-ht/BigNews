(function (window) {
    // 获取有没有 token 令牌
    const token = localStorage.getItem('token');

    $.ajaxSetup({
        //获取用户信息的接口
        beforeSend(xhr) {
            // 没有令牌跳转回登录页(登录接口用户用于获取令牌的)
            if (!token) {
                location.href = './login.html';
            }
            // 如果不是 login.html 登录页, 就统一添加请求头   不是返回-1
            if (location.href.indexOf('login.html') === -1) {
                xhr.setRequestHeader("Authorization", token);
            }
        }
    });

    //完整的url: "http://localhost:8080/api/v1/admin/user/detail"
    // 设置请求的服务器根路径, 用于后续完整 url 的拼接
    const baseURL = 'http://localhost:8080/api/v1';
    //
    const urls = {
        // 获取用户信息
        userInfo: baseURL + '/admin/user/info',
        // 获取用户详情
        userDetail: baseURL + '/admin/user/detail',
        // 编辑用户信息
        userEdit: baseURL + '/admin/user/edit',
    };
    // 把 urls 对象暴露到全局 window 对象中
    window.urls = urls;
})(window)