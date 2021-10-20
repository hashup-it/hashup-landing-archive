export interface BulletInterface {
    readonly content: string
    readonly isDone: boolean
    readonly bold: boolean
}

export interface InfoBoxInterface {
    readonly label: string
    readonly bullets: BulletInterface[]
}