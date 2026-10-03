export function normalizeWhitespace(text){
    let result = text;
    //collapse multiple whitespace character(spaces,tabs,newlines) into one space
    result = result.replace(/\s+/g,' ');


    //trim leading and trailing whitespace
    result = result.trim();

    return result;
};