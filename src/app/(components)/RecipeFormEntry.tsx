"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { recipeSchema, RecipeSchemaType } from "../(schemas)";
import { useCallback, useEffect } from "react";

export const RecipeFormEntry = () => {
  const defaultValues: RecipeSchemaType = {
    title: "",
    ingredients: [],
  };
  const form = useForm<RecipeSchemaType>({
    defaultValues,
    resolver: zodResolver(recipeSchema),
  });
  const { fields, append } = useFieldArray<RecipeSchemaType>({
    control: form.control,
    name: "ingredients",
  });

  const submitHandler = form.handleSubmit((data) => {
    console.log(data);
  });
  const handleAddIngredient = useCallback(() => {
    append({ id: "" });
  }, [append]);

  useEffect(() => {
    if (defaultValues.ingredients.length === 0) {
      handleAddIngredient();
    }
  }, [handleAddIngredient, defaultValues.ingredients.length]);

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-y-4 w-fit">
      <div className="flex gap-x-2">
        <label htmlFor="title" className="after:content-[':']">
          レシピ名
        </label>
        <input id="title" {...form.register("title")} className="border" />
      </div>

      <div className="flex flex-col gap-y-2">
        <label className="after:content-[':']">材料</label>
        <button
          type="button"
          onClick={handleAddIngredient}
          className="px-4 py-1 border rounded-lg w-fit"
        >
          材料を追加
        </button>

        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-x-2">
            <div className="after:content-['.']">{index + 1}</div>
            <input
              {...form.register(`ingredients.${index}.id`)}
              className="border"
            />
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="px-4 py-1 border rounded-lg w-fit text-white bg-blue-400"
      >
        送信
      </button>
    </form>
  );
};
