import type { JSONThing } from './json';
export declare const pullJson: (where: string) => Promise<JSONThing>;
export declare var projectJson: (thing: JSONThing) => string;
