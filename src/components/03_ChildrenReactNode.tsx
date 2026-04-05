import type { PropsWithChildren, ReactNode } from "react"

type PanelProps = {
    title: string,
    children?: ReactNode
}

export function Panel({title, children}: PanelProps){

    return (
        <section>
            <h1>{title}</h1>
            <div>{children ?? <em>no children present</em>}</div>
        </section>
    )
}



interface RequiredChildrenProps extends PropsWithChildren {
    title: string,
    children: ReactNode
}

export function RequiredChildrenProps({title, children}: RequiredChildrenProps){

    return (
        <section>
            <h1>{title}</h1>
            <div>{children}</div>
        </section>
    )
}