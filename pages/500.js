import Button from '../components/Button/Button'

export default function Custom500() {
    return (
        <>
            <h2>Oops!</h2>
            <h3>Server-side error occurred</h3>
            <Button text={'<3'} to={'/'}/>
        </>
    )
}
