export function normalizePunctuation(text){
    let result = text;

    result = result.replace(/([.!?,])\1+/g,'$1');
    result = result.replace(/\s+([.!?,])/g, '$1');
    result = result.replace(/([.!?,])(\w)/g, '$1 $2');

    return result
}