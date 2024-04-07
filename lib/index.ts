import fs from 'fs';
import type { JSONThing } from './json';

export const pullJson = async (where: string): Promise<JSONThing> => {
    return new Promise((resolve, reject) => {
        fs.readFile(where, 'utf-8', async (err, data) => {
            if (err) {
                reject(err);
            } else {
                const finData: JSONThing = {
                    data: JSON.parse(data)
                };
                resolve(finData);
            }
        });
    });
};

export var projectJson = (thing:JSONThing) => {
    return JSON.stringify(thing.data)
}
