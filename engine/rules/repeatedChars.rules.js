export function normalizeRepeatedChars(text){
    let result = text;

    result = result.replace(/(\w)\1{2,}/g, '$1$1')
    return result
}