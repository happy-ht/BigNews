(function (window) {
    // 获取有没有 token 令牌
    const token = localStorage.getItem('token');

    $.ajaxSetup({
        beforeSend(xhr) {
            // 没有令牌跳转回登录页(登录接口用户用于获取令牌的)
            if (!token) {
                location.href = './login.html';
            }
            // 如果不是 login.html 登录页, 就同意添加请求头   不是返回-1
            if (location.href.indexOf('login.html') === -1) {
                xhr.setRequestHearder("Authorization", token);
            }
        }
    })
})(window)