import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Documentation from '@/pages/Documentation';
import Installation from '@/components/installation/Installation.tsx';
import Introduction from '@/components/introduction/Introduction.tsx';
import Theming from '@/components/theming';
import Typography from '@/components/typography';

import { AccordionDocs } from '@/components/ui/accordion';
import { AlertDocs } from '@/components/ui/alert';
import { AlertDialogDocs } from '@/components/ui/alert-dialog';
import { AspectRatioDocs } from '@/components/ui/aspect-ratio';
import { AvatarDocs } from '@/components/ui/avatar';
import { BadgeDocs } from '@/components/ui/badge';
import { ButtonDocs } from '@/components/ui/button';
import { BreadcrumbDocs } from '@/components/ui/breadcrumb';
import { CalendarDocs } from '@/components/ui/calendar';
import { CardDocs } from '@/components/ui/card';
import { CheckboxDocs } from '@/components/ui/checkbox';
import { CollapsibleDocs } from '@/components/ui/collapsible';
import { ComboBoxDocs } from '@/components/ui/combo-box';
import { CommandDocs } from '@/components/ui/command';
import { DataTableDocs } from '@/components/ui/data-table';
import { DatePickerDocs } from '@/components/ui/date-picker';
import { ContextMenuDocs } from '@/components/ui/context-menu';
import { DialogDocs } from '@/components/ui/dialog';
import { DropdownMenuDocs } from '@/components/ui/dropdown-menu';
import { HoverCardDocs } from '@/components/ui/hover-card';
import { InputDocs } from '@/components/ui/input';
import { LabelDocs } from '@/components/ui/label';
import { MenuBarDocs } from '@/components/ui/menu-bar';
import { NavigationMenuDocs } from '@/components/ui/navigation-menu';
import { PopoverDocs } from '@/components/ui/popover';
import { ProgressDocs } from '@/components/ui/progress';
import { RadioGroupDocs } from '@/components/ui/radio-group';
import { ScrollAreaDocs } from '@/components/ui/scroll-area';
import { SelectDocs } from '@/components/ui/select';
import { SeparatorDocs } from '@/components/ui/separator';
import { SheetDocs } from '@/components/ui/sheet';
import { SkeletonDocs } from '@/components/ui/skeleton';
import { SliderDocs } from '@/components/ui/slider';
import { SwitchDocs } from '@/components/ui/switch';
import { TableDocs } from '@/components/ui/table';
import { TabsDocs } from '@/components/ui/tabs';
import { TextareaDocs } from '@/components/ui/textarea';
import { ToastDocs } from '@/components/ui/toast';
import { ToggleDocs } from '@/components/ui/toggle';
import { TooltipDocs } from '@/components/ui/tooltip';

import './App.css';

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Documentation />}>
              <Route path="/docs" element={<Introduction />} />
              <Route path="/docs/installation" element={<Installation />} />
              <Route path="/docs/theming" element={<Theming />} />
              <Route path="/docs/typography" element={<Typography />} />

              <Route path="/docs/components/breadcrumb" element={<BreadcrumbDocs />} />
              <Route path="/docs/components/accordion" element={<AccordionDocs />} />
              <Route path="/docs/components/alert" element={<AlertDocs />} />
              <Route path="/docs/components/alert-dialog" element={<AlertDialogDocs />} />
              <Route path="/docs/components/aspect-ratio" element={<AspectRatioDocs />} />
              <Route path="/docs/components/avatar" element={<AvatarDocs />} />
              <Route path="/docs/components/badge" element={<BadgeDocs />} />
              <Route path="/docs/components/button" element={<ButtonDocs />} />
              <Route path="/docs/components/calendar" element={<CalendarDocs />} />
              <Route path="/docs/components/card" element={<CardDocs />} />
              <Route path="/docs/components/checkbox" element={<CheckboxDocs />} />
              <Route path="/docs/components/collapsible" element={<CollapsibleDocs />} />
              <Route path="/docs/components/combo-box" element={<ComboBoxDocs />} />
              <Route path="/docs/components/command" element={<CommandDocs />} />
              <Route path="/docs/components/context-menu" element={<ContextMenuDocs />} />
              <Route path="/docs/components/data-table" element={<DataTableDocs />} />
              <Route path="/docs/components/date-picker" element={<DatePickerDocs />} />
              <Route path="/docs/components/dialog" element={<DialogDocs />} />
              <Route path="/docs/components/dropdown-menu" element={<DropdownMenuDocs />} />
              <Route path="/docs/components/hover-card" element={<HoverCardDocs />} />
              <Route path="/docs/components/input" element={<InputDocs />} />
              <Route path="/docs/components/label" element={<LabelDocs />} />
              <Route path="/docs/components/menu-bar" element={<MenuBarDocs />} />
              <Route path="/docs/components/navigation-menu" element={<NavigationMenuDocs />} />
              <Route path="/docs/components/popover" element={<PopoverDocs />} />
              <Route path="/docs/components/progress" element={<ProgressDocs />} />
              <Route path="/docs/components/radio-group" element={<RadioGroupDocs />} />
              <Route path="/docs/components/scroll-area" element={<ScrollAreaDocs />} />
              <Route path="/docs/components/select" element={<SelectDocs />} />
              <Route path="/docs/components/separator" element={<SeparatorDocs />} />
              <Route path="/docs/components/sheet" element={<SheetDocs />} />
              <Route path="/docs/components/skeleton" element={<SkeletonDocs />} />
              <Route path="/docs/components/slider" element={<SliderDocs />} />
              <Route path="/docs/components/switch" element={<SwitchDocs />} />
              <Route path="/docs/components/table" element={<TableDocs />} />
              <Route path="/docs/components/tabs" element={<TabsDocs />} />
              <Route path="/docs/components/textarea" element={<TextareaDocs />} />
              <Route path="/docs/components/toast" element={<ToastDocs />} />
              <Route path="/docs/components/toggle" element={<ToggleDocs />} />
              <Route path="/docs/components/tooltip" element={<TooltipDocs />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
