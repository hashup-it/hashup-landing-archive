import { useState, useEffect } from "react"

export const useSplitText = (
    text: string,
    wordsBeforeSlice: number
): { firstLine: string; secondLine: string } => {
    // Split :text into two lines afer :wordsBeforeSlice
    const [firstLine, setFirstLine] = useState<string>("")
    const [secondLine, setSecondLine] = useState<string>("")

    useEffect(() => {
        const words: string[] = text.split(" ")
        const _firstLine: string = words.slice(0, wordsBeforeSlice).join(" ")
        const _secondLine: string = words.slice(wordsBeforeSlice, words.length).join(" ")
        setFirstLine(_firstLine)
        setSecondLine(_secondLine)
    }, [text, wordsBeforeSlice])

    return { firstLine, secondLine }
}
