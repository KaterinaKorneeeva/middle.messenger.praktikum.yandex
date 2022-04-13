import { expect } from 'chai'
import sinon from 'sinon'
import { JSDOM } from 'jsdom'
import {router} from '../index'
describe('Проверяем переходы у Роута', () => {

  const { window } = new JSDOM(
    `<html>
    <body>
        <div id="app"></div>
    </body>
    </html>`,
    { url: 'http://localhost' },
  )
  // @ts-ignore
  global.window = window
  global.document = window.document

  it('Переход на новую страницу должен менять состояние сущности history', () => {
    router.history.pushState({ page: '/' }, 'LoginPage', '/')
    router.history.pushState({ page: 'sign-up' }, 'SignUpPage', '/sign-up')
    expect(router.history.length).to.eq(3)
  })

  it('Переход назад должен менять состояние сущности history', () => {
    const backSpy = sinon.spy(global.window.history, 'back')
    router.back()
    expect(backSpy.callCount).to.eq(1)
  })

  it('Переход вперед должен менять состояние сущности history', () => {
    const backSpy = sinon.spy(global.window.history, 'forward')
    router.forward()
    expect(backSpy.callCount).to.eq(1)
  })

  it('В массиве роутов есть роут', () => {
    router.use('/404', '')
    const route = router.getRoute('/404')
    expect(route).to.not.be.undefined
  })
})
