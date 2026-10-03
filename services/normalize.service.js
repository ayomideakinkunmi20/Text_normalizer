import { normalizeText } from "../engine/ruleEngine.js";
import normalizationLog from '../models/normalizationLog.model.js';

export async function normalizeService(text,profileName) {
    const normalizedText = normalizeText(text,profileName)

    await normalizationLog.create({
        originalText:text,
        normalizedText:normalizeText,
        profile:profileName
    })
    return {
        originalText:text,
        normalizedText,
    };
}