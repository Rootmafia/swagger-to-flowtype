// @flow
export type Pet = Object;
export type NewPet = { name: string, tag: string };
export type ErrorModel = { code: number, message: string };
export type IGenericCollectionPet = { items: Array<Pet> };
export type IGenericCollectionString = { items: Array<string> };
