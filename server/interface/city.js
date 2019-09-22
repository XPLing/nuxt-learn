import Router from 'koa-router';

const router = new Router({
    prefix: '/city'
});

router.get('/list', async (ctx) => {
    ctx.cookies.set('user', JSON.stringify({
        name: 'xpl'
    }));
    ctx.body = {
        list: ['北京', '天津']
    };
});

export default router;
