"use client";

import { UseFormReturn } from "react-hook-form";
import { RecipeSchemaType } from "../(schemas)";
import { useFieldArray } from "react-hook-form";
import { PropsWithChildren, useCallback } from "react";

type Props = PropsWithChildren<{
  form: UseFormReturn<RecipeSchemaType>;
}>;

export const RecipeFormFields = ({ form, children }: Props) => {
  const { fields, append } = useFieldArray<RecipeSchemaType>({
    control: form.control,
    name: "ingredients",
  });

  const handleAddIngredient = useCallback(() => {
    append({ id: "" });
  }, [append]);

  return (
    <>
      <div className="flex gap-x-2">
        <label htmlFor="title" className="after:content-[':']">
          レシピ名
        </label>
        <input id="title" {...form.register("title")} className="border" />
      </div>

      {children}

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
    </>
  );
};
