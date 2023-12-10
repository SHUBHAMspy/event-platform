import { TicketIcon, UsersIcon,GlobeAltIcon,CubeTransparentIcon } from "@heroicons/react/24/outline";
import Dropdown from "../../components/common/dropDown/Dropdown";
import ToggleButton from "../../components/common/ToggleButton/ToggleButton";
import { useContext } from "react";
import { EventContext } from "../../context/eventContext/EventContext";

const options = [
  {
    option: 'Tickets',
    icon: <TicketIcon className="h-4 w-4"/>,
    dropdownOptions: ['Free','Paid'],
    componentType: "Dropdown",
    context: "tickets"
  },
  {
    option: 'Require Approval',
    icon: <UsersIcon className="h-4 w-4"/>,
    componentType: "ToggleButton",
    context: "toggleButton"
  },
  {
    option: 'Capacity',
    icon: <CubeTransparentIcon className="h-4 w-4"/>,
    dropdownOptions: ['Unlimited','Limited'],
    componentType: "Dropdown",
    context: "capacity"
  },
  {
    option: 'Visibility',
    icon: <GlobeAltIcon className="h-4 w-4"/>,
    dropdownOptions: ['Public','Private'],
    componentType: "Dropdown",
    context: "visibility"
  },
]

export default options