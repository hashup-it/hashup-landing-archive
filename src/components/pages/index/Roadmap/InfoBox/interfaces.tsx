export interface BulletInterface {
    readonly contentLocale: string
    readonly isDone: boolean
    readonly bold: boolean
}

export interface InfoBoxInterface {
    readonly labelLocale: string
    readonly bullets: BulletInterface[]
}
