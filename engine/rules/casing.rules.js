export function normalizeCasing(text){
    let result = text;

//lowercase everything as a baseline
    result = result.toLowerCase();

//capitalize the first letter of the whole string, and the first letter
result = result.replace(/(^\s*\w|[.!?]\s+\w)/g, (match) =>match.toUpperCase());

return result;
}