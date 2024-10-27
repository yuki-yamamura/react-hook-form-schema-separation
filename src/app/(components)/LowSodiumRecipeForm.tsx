"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { lowSodiumRecipeSchema, LowSodiumRecipeSchemaType } from "../(schemas)";
import { RecipeFormFields } from "./RecipeFormFields";

export const LowSodiumRecipeForm = () => {
  const defaultValues: LowSodiumRecipeSchemaType = {
    title: "",
    ingredients: [],
    sodiumContent: 0,
  };
  const form = useForm<LowSodiumRecipeSchemaType>({
    defaultValues,
    resolver: zodResolver(lowSodiumRecipeSchema),
  });

  const submitHandler = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-y-4 w-fit">
      <RecipeFormFields form={form}>
        <div className="flex gap-x-2">
          <label htmlFor="sodiumContent" className="after:content-[':']">
            塩分量 (g)
          </label>
          <input
            id="sodiumContent"
            type="number"
            {...form.register("sodiumContent")}
            className="border"
          />
        </div>
      </RecipeFormFields>

      <button
        type="submit"
        className="px-4 py-1 border rounded-lg w-fit text-white bg-blue-400"
      >
        送信
      </button>
    </form>
  );
};
