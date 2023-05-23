import Accordion from '@/components/UI/accordion';
import Alert from '@/components/UI/alert';
import AlertDialog from '@/components/UI/alert-dialog';
import AspectRatio from '@/components/UI/aspect-ratio';
import Avatar from '@/components/UI/avatar';
import Badge from '@/components/UI/badge';
import Button from '@/components/UI/button';
import Calendar from '@/components/UI/calendar';
import Card from '@/components/UI/card';
import Checkbox from '@/components/UI/checkbox';
import Collapsible from '@/components/UI/collapsible';
import ComboBox from '@/components/UI/combo-box';
import Command from '@/components/UI/command';
import ContextMenu from '@/components/UI/context-menu';
import DataTable from '@/components/UI/data-table';
import DatePicker from '@/components/UI/date-picker';
import Dialog from '@/components/UI/dialog';
import DropdownMenu from '@/components/UI/dropdown-menu';
import HoverCard from '@/components/UI/hover-card';
import Input from '@/components/UI/input';
import Label from '@/components/UI/label';
import MenuBar from '@/components/UI/menu-bar';
import NavigationMenu from '@/components/UI/navigation-menu';
import Popover from '@/components/UI/popover';
import Progress from '@/components/UI/progress';
import RadioGroup from '@/components/UI/radio-group';
import ScrollArea from '@/components/UI/scroll-area';
import Select from '@/components/UI/select';
import Separator from '@/components/UI/separator';
import Sheet from '@/components/UI/sheet';
import Skeleton from '@/components/UI/skeleton';
import Slider from '@/components/UI/slider';
import Switch from '@/components/UI/switch';
import Table from '@/components/UI/table';
import Tabs from '@/components/UI/tabs';
import Textarea from '@/components/UI/textarea';
import Toast from '@/components/UI/toast';
import Toggle from '@/components/UI/toggle';
import Tooltip from '@/components/UI/tooltip';
import { FunctionComponent } from 'react';

type ComponentMap = {
  [key: string]: FunctionComponent;
};

export const NAVIGATION_MENU_ITEMS: string[] = ['documentation', 'components', 'examples'];

export const DOCUMENTATION: string[] = ['introduction', 'installation', 'theming', 'typography'];

export const COMPONENTS: ComponentMap = {
  accordion: Accordion,
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
