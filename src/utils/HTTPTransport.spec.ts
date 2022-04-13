import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import HTTPTransport from './HTTPTransport'

chai.use(sinonChai)

describe('Testing HTTPTransport', () => {
  let request: HTTPTransport
  beforeEach(() => {
    request = new HTTPTransport()
  })

  it('Metod GET', () => {
    // @ts-ignore
    const requestSpy = sinon.spy(request, 'request')
    request.get('/test')

    expect(requestSpy).to.have.been.calledWith('https://ya-praktikum.tech/api/v2/test', { method: 'GET' })
  })

  it('Metod PUT', () => {
    // @ts-ignore
    const requestSpy = sinon.spy(request, 'request')
    request.put('/test')

    expect(requestSpy).to.have.been.calledWith('https://ya-praktikum.tech/api/v2/test', { method: 'PUT' })
  })

  it('Metod POST', () => {
    // @ts-ignore
    const requestSpy = sinon.spy(request, 'request')
    request.post('/test')

    expect(requestSpy).to.have.been.calledWith('https://ya-praktikum.tech/api/v2/test', { method: 'POST' })
  })

  it('Metod DELETE', () => {
    // @ts-ignore
    const requestSpy = sinon.spy(request, 'request')
    request.delete('/test')

    expect(requestSpy).to.have.been.calledWith('https://ya-praktikum.tech/api/v2/test', { method: 'DELETE' })
  })
})
