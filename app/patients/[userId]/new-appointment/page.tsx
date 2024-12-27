import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.action";
import Image from "next/image";

import * as Sentry from "@sentry/nextjs";

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  Sentry.metrics.set("user_view_new_appointment", patient.name);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />
          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />


          <p className="justify-items-end text-dark-600 xl:text-left">© Care Connect All rights reserved</p>

        </div>
      </section>

      <Image src="/assets/images/appointment-img.png"
        alt="appointment"
        width={1000}
        height={1000}
        className="side-img max-w-[390px] bg-bottom" />
    </div>
  )
}

export default NewAppointment
