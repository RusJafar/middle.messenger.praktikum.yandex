import Block from '../Block/Block'

const render = (selector: string, block: Block): HTMLElement => {
    const root = document.querySelector(selector);

    root.append(block.getContent()!);
    block.dispatchComponentDidMount();

    return <HTMLElement>root;
}

export default render;