import { RecipeForm, LowSodiumRecipeForm } from "@/app/(components)";

export default function Home() {
  return (
    <main>
      <RecipeForm />
      <hr className="my-10" />
      <LowSodiumRecipeForm />
    </main>
  );
}
