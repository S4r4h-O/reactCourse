import Image from "next/image";
import { notFound } from "next/navigation";

import getMeal from "@/utils/meals";
import cssClasses from "./page.module.css";

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) {
    return notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={cssClasses.header}>
        <div className={cssClasses.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={cssClasses.headerText}>
          <h1>{meal.title}</h1>
          <p className={cssClasses.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={cssClasses.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={cssClasses.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
