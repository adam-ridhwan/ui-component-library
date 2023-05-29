import { AccordionDocs } from '@/components/ui/accordion/Accordion.docs';
import Alert from '@/components/ui/alert/alert.tsx';
import AlertDialog from '@/components/ui/alert-dialog/alert-dialog';
import AspectRatio from '@/components/ui/aspect-ratio/aspect-ratio.tsx';
import Avatar from '@/components/ui/avatar/avatar.tsx';
import Badge from '@/components/ui/badge/badge.tsx';
import Button from '@/components/ui/button/button.tsx';
import Calendar from '@/components/ui/calendar/calendar.tsx';
import Card from '@/components/ui/card/card.tsx';
import Checkbox from '@/components/ui/checkbox/checkbox.tsx';
import Collapsible from '@/components/ui/collapsible/collapsible.tsx';
import ComboBox from '@/components/ui/combo-box/combo-box.tsx';
import Command from '@/components/ui/command/command.tsx';
import ContextMenu from '@/components/ui/context-menu/context-menu.tsx';
import DataTable from '@/components/ui/data-table/data-table.tsx';
import DatePicker from '@/components/ui/date-picker/date-picker.tsx';
import Dialog from '@/components/ui/dialog/dialog.tsx';
import DropdownMenu from '@/components/ui/dropdown-menu/dropdown-menu.tsx';
import HoverCard from '@/components/ui/hover-card/hover-card.tsx';
import Input from '@/components/ui/input/input.tsx';
import Label from '@/components/ui/label/label.tsx';
import MenuBar from '@/components/ui/menu-bar/menu-bar.tsx';
import NavigationMenu from '@/components/ui/navigation-menu/navigation-menu.tsx';
import Popover from '@/components/ui/popover/popover.tsx';
import Progress from '@/components/ui/progress/progress.tsx';
import RadioGroup from '@/components/ui/radio-group/radio-group.tsx';
import ScrollArea from '@/components/ui/scroll-area/scroll-area.tsx';
import Select from '@/components/ui/select/select.tsx';
import Separator from '@/components/ui/separator/separator.tsx';
import Sheet from '@/components/ui/sheet/sheet.tsx';
import Skeleton from '@/components/ui/skeleton/skeleton.tsx';
import Slider from '@/components/ui/slider/slider.tsx';
import Switch from '@/components/ui/switch/switch.tsx';
import Table from '@/components/ui/table/table.tsx';
import Tabs from '@/components/ui/tabs/tabs.tsx';
import Textarea from '@/components/ui/textarea/textarea.tsx';
import Toast from '@/components/ui/toast/toast.tsx';
import Toggle from '@/components/ui/toggle/toggle.tsx';
import Tooltip from '@/components/ui/tooltip/tooltip.tsx';

type ComponentMap = {
  [key: string]: React.FunctionComponent<any>;
};

export const NAVIGATION_MENU_ITEMS: string[] = ['documentation', 'components', 'examples'];

export const DOCUMENTATION: string[] = ['introduction', 'installation', 'theming', 'typography'];

export const COMPONENTS: ComponentMap = {
  accordion: AccordionDocs,
  alert: Alert,
  'alert-dialog': AlertDialog,
  'aspect-ratio': AspectRatio,
  avatar: Avatar,
  badge: Badge,
  button: Button,
  calendar: Calendar,
  card: Card,
  checkbox: Checkbox,
  collapsible: Collapsible,
  'combo-box': ComboBox,
  command: Command,
  'context-menu': ContextMenu,
  'data-table': DataTable,
  'date-picker': DatePicker,
  dialog: Dialog,
  'dropdown-menu': DropdownMenu,
  'hover-card': HoverCard,
  input: Input,
  label: Label,
  'menu-bar': MenuBar,
  'navigation-menu': NavigationMenu,
  popover: Popover,
  progress: Progress,
  'radio-group': RadioGroup,
  'scroll-area': ScrollArea,
  select: Select,
  separator: Separator,
  sheet: Sheet,
  skeleton: Skeleton,
  slider: Slider,
  switch: Switch,
  table: Table,
  tabs: Tabs,
  textarea: Textarea,
  toast: Toast,
  toggle: Toggle,
  tooltip: Tooltip,
};

export const EXAMPLES: string[] = ['Dashboard', 'Cards', 'Tasks', 'Playground', 'Music', 'Authentication'];

export const DOC_ROUTE = '/docs';
export const COMPONENTS_ROUTES = '/docs/components';
