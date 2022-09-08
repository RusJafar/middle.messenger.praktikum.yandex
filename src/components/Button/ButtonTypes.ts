export default interface ButtonProps {
    className: string;
    text: string;
    type: string;
    disabled?: string | null
    events: { click: (e: Event) => void }
}