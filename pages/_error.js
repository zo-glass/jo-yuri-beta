import Button from '../components/Button/Button'

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default function Error({ statusCode }) {
    return (
        <>
            <h2>Oops!</h2>
            <h3>
                {statusCode ?
                    `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'
                }
            </h3>
            <Button text={'<3'} to={'/'}/>
        </>
    )
}
