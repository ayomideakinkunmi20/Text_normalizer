import {rules} from './rules/index.js';
import{defaultProfile} from './profiles/default.profiles.js';
import { chatMessageProfile } from './profiles/chatMessage.profiles.js';
import{addressProfile} from './profiles/address.profiles.js';

const profiles = {
    default:defaultProfile,
    chatMessage:chatMessageProfile,
    address:addressProfile,
};

export function normalizeText(text,profileName='default'){
   
   
    const profile = profiles[profileName] || profiles.default;

    let result = text;


    for(const ruleName of profile.rules) {
        const ruleFn = rules[ruleName];
        if(ruleFn){
            result = ruleFn(result);
        }
    }
    return result;
};
