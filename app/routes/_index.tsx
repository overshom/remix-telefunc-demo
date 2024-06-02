import type { MetaFunction } from "@remix-run/node";
import { Hello } from "~/components/Hello";

import { json, useLoaderData } from "@remix-run/react";
import { onHello } from "~/components/Hello.telefunc";

export const loader = async () => {
  return json(await onHello({ name: 'from-server-loader' }));
};

export default function Index() {
  const initialData = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix + Telefunc demo</h1>
      <Hello />
      <div style={{
        border: '1px solid green',
        padding: 8,
        marginTop: 18,
      }}>
        <div>SSR data:</div>
        <pre>{JSON.stringify(initialData, null, 4)}</pre>
      </div>
    </div>
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: "Demo Remix and Telefunc App" },
    { name: "description", content: "Welcome to Remix + Telefunc!" },
  ];
};
