import React from "react";

type Props = { name?: string };

export default function Greeting({ name = "friend" }: Props) {
  return (
    <section className="max-w-3xl mx-auto my-8 p-4 rounded-md bg-gray-50 dark:bg-gray-800 shadow-sm">
      <h2 className="text-2xl font-semibold">Welcome, {name}!</h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        This is a small example component you can replace or expand.
      </p>
    </section>
  );
}
