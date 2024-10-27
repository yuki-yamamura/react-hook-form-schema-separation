import { RecipeFormEntry, LowSodiumRecipeFormEntry } from "@/app/(components)";

export default function Home() {
  return (
    <main>
      <RecipeFormEntry />
      <hr className="my-10" />
      <LowSodiumRecipeFormEntry />
    </main>
  );
}
