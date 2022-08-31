type Nullable<T> = T | null;

const text: Nullable<HTMLDivElement> = document.getElementById(
    "text"
) as HTMLDivElement;
const input: Nullable<HTMLInputElement> = document.getElementById(
    "input"
) as HTMLInputElement;

if (!text || !input) {
    throw new Error("нет полей");
}

const data = {
    title: ""
};

const controlDown = (event: KeyboardEvent) => {
    console.log(event);
};

document.addEventListener('keyup', controlDown);

Object.defineProperty(data, 'title', {});

export default Nullable