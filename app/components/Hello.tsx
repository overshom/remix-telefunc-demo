import { Await } from "@remix-run/react"
import { Suspense, useState } from "react"
import { onHello } from "./Hello.telefunc"

export const Hello: React.FC = () => {
    const [promise, setPromise] = useState<ReturnType<typeof onHello>>()

    return (
        <div style={{
            border: '1px solid green',
            padding: 8,
            minHeight: 220,
        }}>
            <button onClick={() => setPromise(onHello({ name: 'browser requested' }))}>fetch from server</button>
            {promise ? <div>Client data:</div> : <div>Click button to fetch from server</div>}
            <Suspense fallback={<div>Loading...</div>}>
                <Await resolve={promise}>
                    {(resolvedValue) => (
                        <pre>{JSON.stringify(resolvedValue, null, 4)}</pre>
                    )}
                </Await>
            </Suspense>
        </div>
    )
}