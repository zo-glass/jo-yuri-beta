import { useEffect } from "react"
import { useRouter } from "next/router"
import Button from '../components/Button/Button'

export default function Custom404() {
    const router = useRouter()

    useEffect(() => {
        router.replace("/")
    })

    return (
        <>
            {/*<h2>Oops!</h2>
            <h3>There&apos;s nothing here</h3>
            <Button text={'<3'} to={'/'}/>*/}
        </>
    )
}
