import Block from './Block'

export function renderDOM(rootSelector: string, component: Block) {
    const root = document.querySelector(rootSelector);

    alert(3)

    console.log('rootrootroot',component);
    if (!root) {
        throw new Error('Root not found')
    }

    root.innerHTML = ''

    root.append(component.getContent())
}
