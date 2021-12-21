import { Languages } from "../src/config"
import LocaleTemplate from "../src/locales/template"

// template

const findMissing = (a: string[], b: string[]) => {
    // Return :a elements which are not in :b
    return a.filter((v, idx, arr) => !b.includes(v))
}

const findUnwanted = (a: string[], b: string[]) => {
    // Return :b elements which are not in :a
    return b.filter((v, idx, arr) => !a.includes(v))
}

const findCommon = (a: string[], b: string[]) => {
    // Return common elements for both arrays
    return a.filter((v, idx, addr) => b.includes(v))
}

const getKeysWhichAreObjects = (obj: any) => {
    return Object.keys(obj).filter((v, idx, arr) => typeof obj[v] === "object" && obj[v] !== null)
}

const printKeys = (status: string, prefix: string, keys: string[]) => {
    for (const key of keys) {
        const statusField = `(${status})`.padEnd(20, " ")
        console.log(`  ${statusField} ${prefix}.${key}`)
    }
}

const compareObjects = (prefix: string, templateObj: any, targetObj: any) => {
    /*
        Recursive function.
    */
    const templateKeys = Object.keys(templateObj)
    const targetKeys = Object.keys(targetObj)

    const missingKeys = findMissing(templateKeys, targetKeys)
    const unwantedKeys = findUnwanted(templateKeys, targetKeys)
    printKeys("add", prefix, missingKeys)
    printKeys("remove", prefix, unwantedKeys)

    const templateObjKeys = getKeysWhichAreObjects(templateObj)
    const targetObjKeys = getKeysWhichAreObjects(targetObj)
    printKeys(
        "should be obj",
        prefix,
        findMissing(findMissing(templateObjKeys, targetObjKeys), missingKeys)
    )
    printKeys(
        "should not be obj",
        prefix,
        findMissing(findUnwanted(templateObjKeys, targetObjKeys), unwantedKeys)
    )

    const keysToGoDeeper = findCommon(templateObjKeys, targetObjKeys)

    // If there are keys to go deeper
    if (keysToGoDeeper.length > 0) {
        for (const key of keysToGoDeeper) {
            compareObjects(`${prefix}.${key}`, templateObj[key], targetObj[key])
        }
    }
}

if (require.main === module) {
    // Iterate over languages available in app
    for (const lang of Object.values(Languages)) {
        console.log(`\nWhat's wrong with ${lang.code.toUpperCase()} locale file?`)
        compareObjects("", LocaleTemplate, lang.locale)
    }
}
