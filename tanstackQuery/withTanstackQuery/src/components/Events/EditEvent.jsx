import {
  Link,
  useNavigate,
  redirect,
  useSubmit,
  useNavigation,
} from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { fetchEvent, updateEvent, queryClient } from "../../util/http.js";
import { useParams } from "react-router-dom";

export default function EditEvent() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const { state } = useNavigation();
  const params = useParams();

  const { data, isError, error } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    staleTime: 10000,
  });

  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {
  //     // Optimistic updating - updating the page without waiting for a
  //     // response from the server
  //     const newEvent = data.event;
  //     await queryClient.cancelQueries({ queryKey: ["events", params.id] });
  //     // Roll back if query fails
  //     const prevEvent = queryClient.getQueryData(["events", params.id]);
  //
  //     queryClient.setQueryData(["events", params.id], newEvent);
  //
  //     return { prevEvent };
  //   },
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(["events", params.id], context.prevEvent);
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries(["events", params.id]);
  //   },
  // });

  function handleSubmit(formData) {
    submit(formData, { method: "PUT" });
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={error.info?.message || "Failed to load event."}
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Ok
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === "submitting" ? (
          <p>Sending data...</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({ params }) {
  queryClient.fetchQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updateEventData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updateEventData });
  await queryClient.invalidateQueries(["events"]);
  return redirect("../");
}
