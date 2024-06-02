import { ActionFunctionArgs } from "@remix-run/node";
import { telefunc } from "telefunc";

export async function action({ request }: ActionFunctionArgs) {
  const { url, method } = request;
  const body = await request.json();
  const httpResponse = await telefunc({
    url: new URL(url).pathname,
    method,
    body: JSON.stringify(body),
  });
  return JSON.parse(httpResponse.body);
}
