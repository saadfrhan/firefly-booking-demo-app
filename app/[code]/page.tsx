import DetailsSheet from "@/components/details-sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  CircleHelp,
  CircleUser,
  LucideIcon,
  Mail,
  PlaneTakeoff,
  Printer,
  Search,
  Split,
} from "lucide-react";
import { IconType } from "react-icons";
import { CiPlane } from "react-icons/ci";

export default function Page({
  params,
}: {
  params: {
    code: string;
  };
}) {
  return (
    <div className="max-w-7xl pt-6 pb-6 w-full px-4 mx-auto grid grid-cols-[3.5fr_1.5fr] max-[930px]:grid-cols-1 gap-12">
      <div className="flex flex-col gap-y-6 w-full mt-7">
        <h3 className="text-2xl font-semibold text-[#333]">
          Manage your booking
        </h3>
        <div className="flex gap-y-2 flex-col">
          <p className="font-light text-xl">
            Your booking reference:{" "}
            <span className="text-primary font-bold">{params.code}</span>
          </p>
          <p className="font-light text-xl">
            Booking status:{" "}
            <span className="text-primary font-bold">Closed</span>
          </p>
          <p className="font-light text-xl">
            Booking date:{" "}
            <span className="text-primary font-bold">Tue, 28 May 2024</span>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-y-4">
        <h4 className="text-xl font-semibold text-[#333]">Your itinerary</h4>
          <div className="flex flex-col gap-y-3">
          <p>Departure</p>
          <div className="border rounded-lg">
            <div className="border-b grid grid-cols-2 gap-4 max-[640px]:grid-cols-1 py-3 px-6">
              <div className="flex gap-2 text-primary items-center font-semibold">
                <p>Nanking/Nanjing Airport</p>
                <ArrowRightIcon className="w-6 h-6 ml-2" />
                <p>Tawau</p>
              </div>
              <div className="flex gap-2 items-center justify-between">
                <p>Saturday, 8 June 2024</p>
                <button className="border rounded-md border-primary text-primary font-bold text-[12px] px-5 py-1">
                  SAVER
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1 items-center py-5 px-6">
              <div className="flex justify-between items-center">
                <div className="flex flex-col items-start">
                  <h4 className="text-xl">
                    <span className="font-bold">00:50 -</span>
                    <span> NKG</span>
                  </h4>
                  <p className="text-[12px] text-muted-foreground">
                    Nanking/Nanjing Airport
                  </p>
                </div>
                <div className="flex items-center justify-center flex-col">
                  <div className="border-t-2 w-36" />
                  <CiPlane className="w-6 h-6 text-muted-foreground mt-[-12px] bg-white" />
                  <p className="text-[12px] text-muted-foreground">
                    Non-stop, 5h
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col items-start">
                  <h4 className="text-xl">
                    <span className="font-bold">05:50 -</span>
                    <span> TWU</span>
                  </h4>
                  <p className="text-[12px] text-muted-foreground">Tawau</p>
                </div>
                <div className="flex items-center justify-center text-muted-foreground gap-2">
                  <PlaneTakeoff className="w-4 h-4" />
                  <p className="text-[12px]">FY 3831</p>
                </div>
                <DetailsSheet>
                  <Button variant="link" className="text-[12px] font-semibold">
                    View details
                    <ChevronRightIcon className="w-4 h-4 ml-2" />
                  </Button>
                </DetailsSheet>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div className="flex flex-col gap-y-4">
        <h4 className="text-xl font-semibold text-[#333]"> Passengers        </h4>
        </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="rounded-lg p-4 bg-[#fcf5e6]">
          <h4 className="font-semibold">Manage booking</h4>
          <div className="flex flex-col gap-y-3 py-3">
          <PanelButton icon={CircleUser} label="Update passenger details" />
          <PanelButton icon={Split} label="Divide booking" iconClassName="rotate-90" />
          </div>
        </div>
        <div className="rounded-lg p-4 bg-[#fcf5e6]">
          <h4 className="font-semibold">Quick links</h4>
          <div className="flex flex-col gap-y-3 py-3">
          <PanelButton icon={Printer} label="Print trip summary" />
          <PanelButton icon={Mail} label="Resend itinerary email" />
          <PanelButton icon={Search} label="Find another booking" />
          <PanelButton icon={CircleHelp} label="I have an enquiry" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PanelButton({
  label,
  icon: Icon,
  link,
  iconClassName
}: {
  label: string;
  icon: IconType | LucideIcon;
  link?: string;
  iconClassName?: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
      <Icon className={cn("w-5 h-5 text-primary", iconClassName)} />
      <p className="text-[14px]">{label}</p>
      </div>
      <ArrowRightIcon className="w-5 h-5 text-primary" />
    </div>
  );
}
