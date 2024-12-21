import fs from 'fs/promises';
import { parse } from 'yaml';
import { rootConfigSchema } from './config-schema';


export async function parseYAMLConfig(filepath: string) {
    const configFileContent = await fs.readFile(filepath, 'utf-8');
    const configParsed = parse(configFileContent)
    console.log("parsedFile");
    return JSON.stringify(configParsed)
}

export async function validateConfig(config: string) {
    const validationConfig = await rootConfigSchema.parseAsync(JSON.parse(config));
    console.log("validated file");
    return validationConfig;
}