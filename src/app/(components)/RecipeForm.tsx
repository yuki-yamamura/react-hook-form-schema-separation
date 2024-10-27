"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { recipeSchema, RecipeSchemaType } from "../(schemas)";
import { RecipeFormFields } from "./RecipeFormFields";

export const RecipeForm = () => {
  const defaultValues: RecipeSchemaType = {
    title: "",
    ingredients: [],
  };
  const form = useForm<RecipeSchemaType>({
    defaultValues,
    resolver: zodResolver(recipeSchema),
  });
  const submitHandler = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-y-4 w-fit">
      <RecipeFormFields form={form} />

      <button
        type="submit"
        className="px-4 py-1 border rounded-lg w-fit text-white bg-blue-400"
      >
        送信
      </button>
    </form>
  );
};
