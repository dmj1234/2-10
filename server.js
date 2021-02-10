const express = require('express');

const app = express();

app.get('/home', (request, response) => {
    //响应一个页面
    response.sendFile(__dirname, +'/index.html')
});

app.get('/data', (response, require) => {
    response.send('用户数据');
})

app.listen(9000, () => {
    console.log("服务已启动");
});