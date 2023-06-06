import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import useResolution, { DeviceType } from '@/hooks/useResolution';

import DesktopSideNavBar from '@/layouts/side-nav-desktop/SideNavDesktop.tsx';

import Installation from '@/components/installation/Installation.tsx';
import Introduction from '@/components/introduction/Introduction.tsx';
import Theming from '@/components/theming';
import Typography from '@/components/typography';

import { AccordionDocs } from '@/components/ui/accordion';
import { AlertDialogDocs } from '@/components/ui/alert-dialog';
import { AlertDocs } from '@/components/ui/alert';
import { AspectRatioDocs } from '@/components/ui/aspect-ratio';
import { AvatarDocs } from '@/components/ui/avatar';
import { BadgeDocs } from '@/components/ui/badge';
import { BreadcrumbDocs } from '@/components/ui/breadcrumb';
import { ButtonDocs } from '@/components/ui/button';
import { CalendarDocs } from '@/components/ui/calendar';
import { CardDocs } from '@/components/ui/card';
import { CheckboxDocs } from '@/components/ui/checkbox';
import { CollapsibleDocs } from '@/components/ui/collapsible';
import { ComboBoxDocs } from '@/components/ui/combo-box';
import { CommandDocs } from '@/components/ui/command';
import { ContextMenuDocs } from '@/components/ui/context-menu';
import { DataTableDocs } from '@/components/ui/data-table';
import { DatePickerDocs } from '@/components/ui/date-picker';
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

import styles from './Content-styles.module.css';

const Content: FC = () => {
  const { currentSection, setCurrentSection } = useSideBarContext();
  const [deviceType] = useResolution();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const sectionArray = path.split('/');
    setCurrentSection(sectionArray[sectionArray.length - 1]);
  }, [path, setCurrentSection]);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {[DeviceType.DESKTOP, DeviceType.LARGE_DESKTOP].includes(deviceType) && <DesktopSideNavBar />}

          <div className={styles.middle_container}>
            {/* Getting started section */}
            {currentSection === 'docs' && <Introduction />}
            {currentSection === 'installation' && <Installation />}
            {currentSection === 'theming' && <Theming />}
            {currentSection === 'typography' && <Typography />}

            {/* Component docs section*/}
            {currentSection === 'accordion' && <AccordionDocs />}
            {currentSection === 'alert' && <AlertDocs />}
            {currentSection === 'alert-dialog' && <AlertDialogDocs />}
            {currentSection === 'aspect-ratio' && <AspectRatioDocs />}
            {currentSection === 'avatar' && <AvatarDocs />}
            {currentSection === 'badge' && <BadgeDocs />}
            {currentSection === 'breadcrumb' && <BreadcrumbDocs />}
            {currentSection === 'button' && <ButtonDocs />}
            {currentSection === 'calendar' && <CalendarDocs />}
            {currentSection === 'card' && <CardDocs />}
            {currentSection === 'checkbox' && <CheckboxDocs />}
            {currentSection === 'collapsible' && <CollapsibleDocs />}
            {currentSection === 'combo-box' && <ComboBoxDocs />}
            {currentSection === 'command' && <CommandDocs />}
            {currentSection === 'context-menu' && <ContextMenuDocs />}
            {currentSection === 'data-table' && <DataTableDocs />}
            {currentSection === 'date-picker' && <DatePickerDocs />}
            {currentSection === 'dialog' && <DialogDocs />}
            {currentSection === 'dropdown-menu' && <DropdownMenuDocs />}
            {currentSection === 'hover-card' && <HoverCardDocs />}
            {currentSection === 'input' && <InputDocs />}
            {currentSection === 'label' && <LabelDocs />}
            {currentSection === 'menu-bar' && <MenuBarDocs />}
            {currentSection === 'navigation-menu' && <NavigationMenuDocs />}
            {currentSection === 'popover' && <PopoverDocs />}
            {currentSection === 'progress' && <ProgressDocs />}
            {currentSection === 'radio-group' && <RadioGroupDocs />}
            {currentSection === 'scroll-area' && <ScrollAreaDocs />}
            {currentSection === 'select' && <SelectDocs />}
            {currentSection === 'separator' && <SeparatorDocs />}
            {currentSection === 'sheet' && <SheetDocs />}
            {currentSection === 'skeleton' && <SkeletonDocs />}
            {currentSection === 'slider' && <SliderDocs />}
            {currentSection === 'switch' && <SwitchDocs />}
            {currentSection === 'table' && <TableDocs />}
            {currentSection === 'tabs' && <TabsDocs />}
            {currentSection === 'textarea' && <TextareaDocs />}
            {currentSection === 'toast' && <ToastDocs />}
            {currentSection === 'toggle' && <ToggleDocs />}
            {currentSection === 'tooltip' && <TooltipDocs />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
