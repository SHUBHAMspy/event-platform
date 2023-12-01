import { TicketIcon, UsersIcon,GlobeAltIcon,CubeTransparentIcon } from "@heroicons/react/24/outline";
import Dropdown from "../../components/common/dropDown/Dropdown";
import ToggleButton from "../../components/common/ToggleButton/ToggleButton";

const options = [
  {
    option: 'Tickets',
    icon: <TicketIcon className="h-4 w-4"/>,
    dropdownOptions: ['Free','Paid'],
    component: <Dropdown options={['Free','Paid']}/>
  },
  {
    option: 'Require Approval',
    icon: <UsersIcon className="h-4 w-4"/>,
    dropdownOptions: ['Free','Paid'],
    component: <ToggleButton/>
  },
  {
    option: 'Capacity',
    icon: <CubeTransparentIcon className="h-4 w-4"/>,
    dropdownOptions: ['Unlimited','Limited'],
    component: <Dropdown options={['Unlimited','Limited']}/>
  },
  {
    option: 'Visibility',
    icon: <GlobeAltIcon className="h-4 w-4"/>,
    dropdownOptions: ['Public','Private'],
    component: <Dropdown options={['Public','Private']}/>
  },
]

export default options