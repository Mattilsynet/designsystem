export let buttonId;
export function clickOutside(node, buttonId) {
    const handleClick = (event) => {
        if (event &&
            event.target &&
            !node.contains(event.target) &&
            event.target.id !== buttonId) {
            node.dispatchEvent(new CustomEvent('clickOutside'));
        }
    };
    document.addEventListener('click', handleClick, true);
    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    };
}
