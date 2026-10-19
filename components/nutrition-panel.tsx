import { nutrition, type NutritionRow } from "@/content/site";

export function NutritionPanel() {
  return (
    <figure className="w-full max-w-[22rem] rounded-2xl bg-white px-4 py-4 text-ink shadow-[0_18px_40px_-28px_rgba(28,20,16,0.7)] ring-1 ring-ink/10">
      <figcaption className="sr-only">
        Nutrition facts for one 12 ounce bottle of Rishi Coffee vanilla latte.
      </figcaption>
      <p className="font-sans text-[1.65rem] leading-none font-extrabold tracking-tight">
        {nutrition.title}
      </p>
      <p className="mt-1 text-sm font-semibold">{nutrition.serving}</p>
      <div className="mt-1 h-2.5 bg-ink" />
      <div className="flex items-end justify-between gap-4 py-1">
        <p className="text-lg font-extrabold">Calories</p>
        <p className="font-display text-6xl leading-none font-semibold tracking-tight">
          {nutrition.calories}
        </p>
      </div>
      <div className="h-1.5 bg-ink" />
      <p className="py-1 text-right text-xs font-extrabold">% Daily Value*</p>
      <table className="w-full border-collapse text-sm">
        <tbody>
          {nutrition.rows.map((row) => (
            <NutritionLine key={row.name} row={row} />
          ))}
          <tr>
            <th scope="row" className="border-t-[6px] border-ink py-1 text-left font-extrabold">
              Protein <span className="font-normal">{nutrition.protein}</span>
            </th>
            <td className="border-t-[6px] border-ink py-1" />
          </tr>
        </tbody>
      </table>
      <div className="h-2.5 bg-ink" />
      <p className="mt-2 text-[0.7rem] leading-snug">*{nutrition.footnote}</p>
      <p className="mt-3 text-sm leading-snug">
        <span className="font-extrabold">Ingredients: </span>
        {nutrition.ingredients}
      </p>
    </figure>
  );
}

function NutritionLine({ row }: { row: NutritionRow }) {
  const indent = row.indent === 2 ? "pl-6" : row.indent === 1 ? "pl-3" : "";
  const weight = row.emphasis ? "font-extrabold" : "font-normal";

  return (
    <tr>
      <th scope="row" className={`border-t border-ink py-1 text-left ${indent} ${weight}`}>
        {row.name}
        {row.amount ? <span className="font-normal"> {row.amount}</span> : null}
      </th>
      <td className="border-t border-ink py-1 text-right align-top font-extrabold">
        {row.dailyValue ?? ""}
      </td>
    </tr>
  );
}
