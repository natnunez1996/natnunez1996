import './button.scss'

interface Props {
    children: React.ReactNode,
    onClick: () => void
}
export default function Button({ children, onClick }: Props): React.JSX.Element {
    return (
        <button onClick={onClick}>{children}</button>
    )
}