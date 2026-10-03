import {jest}  from '@jest/globals';
import request from 'supertest';

jest.unstable_mockModule('../../models/normalizationLog.model.js',()=>({
    default:{create:jest.fn().mockResolvedValue({}) }
}));

const {default:app} =await import('../../app.js');

describe('POST/api/v1/normalize', ()=>{
    test('uses the default profile when none is given', async ()=>{
        const res =await request(app)
        .post('/api/v1/normalize')
        .send({text: 'heyyyy PLS help!!!'});
        
        expect(res.status).toBe(200);
        expect(res.body.normalizedText).toBe('Heyy please help!');
    });

    test('applies the chatMessage profile',async ()=> {
        const res = await request(app)
        .post('/api/v1/normalize')
        .send({text:'idk pls!!!', profile:'chatMessage'});

        expect(res.status).toBe(200);
        expect(res.body.normalizedText).toBe("I don't know please!");
    });
    
    test('return 400 when text is missing',async() =>{
        const res = await request(app).post('/api/v1/normalize').send({});
        expect(res.status).toBe(400);
    });
});