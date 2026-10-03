import abbreviations from '../../data/abbreviations.json'with{type:'json'}

export function normalizeAbbreviations(text){
    return text

    .replace(/\s+/g, ' ')
    .replace(/\b[\w']+\b/g, (word)=>{

        const key = word.toLowerCase();
        return Object.hasOwn(abbreviations,key) ? abbreviations[key]:word;
    });
}