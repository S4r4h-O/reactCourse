import EventItem from "../components/EventItem";
import { redirect, useRouteLoaderData } from "react-router-dom";

export default function EventDetailItem() {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;

  return (
    <div>
      <EventItem event={event} />
    </div>
  );
}

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not fetch details for selected event.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not delete the selected event.",
      }),
      {
        status: 500,
      },
    );
  }

  return redirect("/events");
}
