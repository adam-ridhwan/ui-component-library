import Installation from '@/components/GettingStarted/Installation';
import Introduction from '@/components/GettingStarted/Introduction';
import Theming from '@/components/GettingStarted/Theming';
import Typography from '@/components/GettingStarted/Typography';
import Accordian from '@/components/ui/accordian';
import Alert from '@/components/ui/alert';
import AlertDialog from '@/components/ui/alert-dialog';
import AspectRatio from '@/components/ui/aspect-ratio';
import Avatar from '@/components/ui/avatar';
import Badge from '@/components/ui/badge';
import Button from '@/components/ui/button';
import Calendar from '@/components/ui/calendar';
import Card from '@/components/ui/card';
import Checkbox from '@/components/ui/checkbox';
import Collapsible from '@/components/ui/collapsible';
import ComboBox from '@/components/ui/combo-box';
import Command from '@/components/ui/command';
import ContextMenu from '@/components/ui/context-menu';
import DataTable from '@/components/ui/data-table';
import DatePicker from '@/components/ui/date-picker';
import Dialog from '@/components/ui/dialog';
import DropdownMenu from '@/components/ui/dropdown-menu';
import HoverCard from '@/components/ui/hover-card';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import MenuBar from '@/components/ui/menu-bar';
import NavigationMenu from '@/components/ui/navigation-menu';
import Popover from '@/components/ui/popover';
import Progress from '@/components/ui/progress';
import RadioGroup from '@/components/ui/radio-group';
import ScrollArea from '@/components/ui/scroll-area';
import Select from '@/components/ui/select';
import Separator from '@/components/ui/separator';
import Sheet from '@/components/ui/sheet';
import Skeleton from '@/components/ui/skeleton';
import Slider from '@/components/ui/slider';
import Switch from '@/components/ui/switch';
import Table from '@/components/ui/table';
import Tabs from '@/components/ui/tabs';
import Textarea from '@/components/ui/textarea';
import Toast from '@/components/ui/toast';
import Toggle from '@/components/ui/toggle';
import Tooltip from '@/components/ui/tooltip';
import { FunctionComponent } from 'react';

type ComponentMap = {
  [key: string]: FunctionComponent;
};

export const COMPONENTS: ComponentMap = {
  Accordian: Accordian,
  Alert: Alert,
  'Alert Dialog': AlertDialog,
  'Aspect Ratio': AspectRatio,
  Avatar: Avatar,
  Badge: Badge,
  Button: Button,
  Calendar: Calendar,
  Card: Card,
  Checkbox: Checkbox,
  Collapsible: Collapsible,
  'Combo Box': ComboBox,
  Command: Command,
  'Context Menu': ContextMenu,
  'Data Table': DataTable,
  'Date Picker': DatePicker,
  Dialog: Dialog,
  'Dropdown Menu': DropdownMenu,
  'Hover Card': HoverCard,
  Input: Input,
  Label: Label,
  'Menu Bar': MenuBar,
  'Navigation Menu': NavigationMenu,
  Popover: Popover,
  Progress: Progress,
  'Radio Group': RadioGroup,
  'Scroll Area': ScrollArea,
  Select: Select,
  Separator: Separator,
  Sheet: Sheet,
  Skeleton: Skeleton,
  Slider: Slider,
  Switch: Switch,
  Table: Table,
  Tabs: Tabs,
  Textarea: Textarea,
  Toast: Toast,
  Toggle: Toggle,
  Tooltip: Tooltip,
};

export const GETTING_STARTED_COMPONENTS: ComponentMap = {
  Introduction: Introduction,
  Installation: Installation,
  Theming: Theming,
  Typography: Typography,
};

export const EXAMPLES: string[] = ['Dashboard', 'Cards', 'Tasks', 'Playground', 'Music', 'Authentication'];

export const DOC_ROUTE = '/docs';
export const DOC_ROUTES = '/docs/';
export const COMPONENTS_ROUTES = '/docs/components/';
