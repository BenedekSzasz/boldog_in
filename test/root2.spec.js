import  request  from "supertest";
// import { expect } from 'chai'
import app from '../app/app.js'

describe('A gyökér útvonal tesztelése', () => {
    it('GET /', (done) => {
        request(app).get('/')
            .expect('Hellóaaaa!')
            .end(done)
    })
})

describe('A gyökér útvonal tesztelése', () => {
    it('GET /', (done) => {
        return request(app).get('/')
            .expect('Helló!')
            
    })
})