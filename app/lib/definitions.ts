export type Recipe = {
    recipe_name: string;
    recipe_description: string;
    date: string;
    user_name: string;
    portions: number;
    preparation_time: string;
}

export type Ingredients = {
        butter: number;
        sugar: number;
        eggs: number;
        wheat_flour: number;
        baking_powder: string;
        vanilla_sugar: string;
        salt: string;
        raspberries: number;
        milk_chocolate: number
}

export type PreparationInstructions = {
    first_step: string;
    second_step: string;
    third_step: string

}
