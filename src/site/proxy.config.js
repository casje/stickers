const proxy = [
    {
        context: '/api',
        target: 'http://localhost:3000'
        //pathRewrite: { '^/': '' }
    }
];
module.exports = proxy;