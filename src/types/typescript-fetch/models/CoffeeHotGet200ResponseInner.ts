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

import { exists, mapValues } from '../runtime';
import type { CoffeeHotGet200ResponseInnerId } from './CoffeeHotGet200ResponseInnerId';
import {
    CoffeeHotGet200ResponseInnerIdFromJSON,
    CoffeeHotGet200ResponseInnerIdFromJSONTyped,
    CoffeeHotGet200ResponseInnerIdToJSON,
} from './CoffeeHotGet200ResponseInnerId';
import type { CoffeeHotGet200ResponseInnerIngredients } from './CoffeeHotGet200ResponseInnerIngredients';
import {
    CoffeeHotGet200ResponseInnerIngredientsFromJSON,
    CoffeeHotGet200ResponseInnerIngredientsFromJSONTyped,
    CoffeeHotGet200ResponseInnerIngredientsToJSON,
} from './CoffeeHotGet200ResponseInnerIngredients';

/**
 * 
 * @export
 * @interface CoffeeHotGet200ResponseInner
 */
export interface CoffeeHotGet200ResponseInner {
    /**
     * 
     * @type {string}
     * @memberof CoffeeHotGet200ResponseInner
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof CoffeeHotGet200ResponseInner
     */
    description?: string;
    /**
     * 
     * @type {CoffeeHotGet200ResponseInnerIngredients}
     * @memberof CoffeeHotGet200ResponseInner
     */
    ingredients?: CoffeeHotGet200ResponseInnerIngredients;
    /**
     * 
     * @type {string}
     * @memberof CoffeeHotGet200ResponseInner
     */
    image?: string;
    /**
     * 
     * @type {CoffeeHotGet200ResponseInnerId}
     * @memberof CoffeeHotGet200ResponseInner
     */
    id?: CoffeeHotGet200ResponseInnerId;
}

/**
 * Check if a given object implements the CoffeeHotGet200ResponseInner interface.
 */
export function instanceOfCoffeeHotGet200ResponseInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CoffeeHotGet200ResponseInnerFromJSON(json: any): CoffeeHotGet200ResponseInner {
    return CoffeeHotGet200ResponseInnerFromJSONTyped(json, false);
}

export function CoffeeHotGet200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoffeeHotGet200ResponseInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'ingredients': !exists(json, 'ingredients') ? undefined : CoffeeHotGet200ResponseInnerIngredientsFromJSON(json['ingredients']),
        'image': !exists(json, 'image') ? undefined : json['image'],
        'id': !exists(json, 'id') ? undefined : CoffeeHotGet200ResponseInnerIdFromJSON(json['id']),
    };
}

export function CoffeeHotGet200ResponseInnerToJSON(value?: CoffeeHotGet200ResponseInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'description': value.description,
        'ingredients': CoffeeHotGet200ResponseInnerIngredientsToJSON(value.ingredients),
        'image': value.image,
        'id': CoffeeHotGet200ResponseInnerIdToJSON(value.id),
    };
}

