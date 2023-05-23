import Accordion from '@/components/ui/accordion';
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
