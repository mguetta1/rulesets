import React, { useState } from 'react';
import {
  MenuToggle,
  Nav,
  NavItem,
  Page,
  PageBreadcrumb,
  PageSection,
  PageHeaderToolsItem,
  PageSidebar,
  Switch,
  Tabs,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  ToolbarToggleGroup,
  ToolbarExpandableContent,
  ToolbarFilter,
  ToolbarChipGroupContent,
  ToolbarGroup,
  Button,
  ButtonVariant,
  AccordionToggle,
  Modal,
  DropdownGroup,
  Text,
  TextVariants,
  FormGroup,
  HelperTextItem,
  Label,
  Masthead
} from '@patternfly/react-core';
import {
  MultiContentCard,
  NotAuthorized,
  InvalidObject,
  LogSnippet,
  LogSnippetBorderVariant,
  ErrorState
} from '@patternfly/react-component-groups';
import { EllipsisVIcon } from '@patternfly/react-icons';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-container">
      <h1>PatternFly Migration Test - Component Props</h1>

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00000 */}
      <MenuToggle variant='plain'>
        <EllipsisVIcon />
      </MenuToggle>

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00010 */}
      <MultiContentCard leftBorderVariant="danger" />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00020 */}
      <Nav variant="tertiary" />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00030 */}
      <NavItem hasNavLinkWrapper />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00040 */}
      <NotAuthorized description="Description text" />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00050 */}
      <Page header={<Masthead />} />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00060 */}
      <PageBreadcrumb isWidthLimited />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00070 */}
      <PageSection isWidthLimited />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00080 */}
      <PageHeaderToolsItem isSelected />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00090 */}
      <PageSidebar theme='dark' />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00100 */}
      <Switch labelOff='Some label' />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00110 */}
      <Tabs isSecondary />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00120 */}
      <Toolbar usePageInsets />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00130 */}
      <ToolbarContent alignSelf={{}} />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00140 */}
      <ToolbarItem widths={{}} />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00150 */}
      <ToolbarToggleGroup alignment={{}} />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00160 */}
      <ToolbarExpandableContent chipContainerRef />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00170 */}
      <ToolbarFilter chips />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00180 */}
      <ToolbarChipGroupContent chipGroupContentRef />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00190 */}
      <ToolbarGroup spacer={{ default: "spacerNone", md: "spacerSm" }} />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00200 */}
      <Button isActive />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00210 */}
      <AccordionToggle isExpanded={isOpen} />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00220 */}
      <Modal title="Modal title" />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00230 */}
      <Button variant={ButtonVariant.link} />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00240 */}
      <DropdownGroup variant="button-group" />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00250 */}
      <Text component={TextVariants.p}>Text content</Text>

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00260 */}
      <Text component="p">Text content</Text>

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00270 */}
      <div style={{ align: { default: 'alignLeft' } }}>
        alignLeft test
      </div>

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00280 */}
      <div style={{ align: { default: 'alignRight' } }}>
        alignRight test
      </div>

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00290 */}
      <FormGroup labelIcon={<>Help icon</>} />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00300 */}
      <HelperTextItem hasIcon />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00310 */}
      <HelperTextItem isDynamic />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00320 */}
      <InvalidObject invalidObjectTitleText="Sample title" invalidObjectBodyText="Sample description" />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00330 */}
      <Label isOverflowLabel />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00340 */}
      <LogSnippet message="Failure - check logs for details" logSnippet="code" leftBorderVariant={LogSnippetBorderVariant.success} />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00350 */}
      <Masthead backgroundColor />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00360 */}
      <ErrorState errorTitle="Sample error title" errorDescription="Sample error description" defaultErrorDescription="Sample default error description" />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00370 */}
      <MenuToggle aria-label='A descriptive aria-label' variant='plain'>
        <EllipsisVIcon />
      </MenuToggle>

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00380 */}
      <Button isDisabled />

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00390 */}
      <div isExpanded={isOpen}>isExpanded test</div>

      {/* Rule patternfly-v5-to-patternfly-v6-component-props-00400 */}
      <Modal isOpen />
    </div>
  );
};

export default App;
