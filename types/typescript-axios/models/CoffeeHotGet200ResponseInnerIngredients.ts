/* tslint:disable */
/* eslint-disable */
/**
 * Vueハンズオン
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @type CoffeeHotGet200ResponseInnerIngredients
 * 
 * @export
 */
export type CoffeeHotGet200ResponseInnerIngredients = Array<string> | string;

export function CoffeeHotGet200ResponseInnerIngredientsFromJSON(json: any): CoffeeHotGet200ResponseInnerIngredients {
    return CoffeeHotGet200ResponseInnerIngredientsFromJSONTyped(json, false);
}

export function CoffeeHotGet200ResponseInnerIngredientsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoffeeHotGet200ResponseInnerIngredients {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...Array<string>FromJSONTyped(json, true), ...stringFromJSONTyped(json, true) };
}

export function CoffeeHotGet200ResponseInnerIngredientsToJSON(value?: CoffeeHotGet200ResponseInnerIngredients | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfArray<string>(value)) {
        return Array<string>ToJSON(value as Array<string>);
    }
    if (instanceOfstring(value)) {
        return stringToJSON(value as string);
    }

    return {};
}
