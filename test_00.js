import { Selector } from 'testcafe';

 fixture `TEST_1`;
test('API CALL Test', async t => 
{
    const status_res = await t.request(`http://localhost:3000`);
    console.log(status_res.status)
    if(status_res.status === 200)
    {
        console.log('\n[Server response is ok]\n');
        const response = await t.request(`http://localhost:3000/devices`);
        console.log(response.body[0].system_name);

         const row = Selector('.device-name').withText(response.body[0].system_name);
        const extractEntries = await row.textContent;
        console.log(extractEntries); 
        
    }else
    {
        console.log('[Server response NOT ok]');
    }
});  

/* test('API CALL Test', async t => 
{
    const results = await t.request(`http://localhost:3000/devices`);
    await t
        .expect(results.status).eql(200)
        .expect(results.statusText).eql('OK')
        .expect(results.headers).contains({ 'content-type': 'application/json; charset=utf-8' })
        

        

});  */

