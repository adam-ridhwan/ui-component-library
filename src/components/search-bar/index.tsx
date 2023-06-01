import BookOpen from '@/assets/svg/BookOpen';
import CloseIcon from '@/assets/svg/CloseIcon';
import EmptyCircleIcon from '@/assets/svg/EmptyCircleIcon';
import MagnifyingIcon from '@/assets/svg/MagnifyingIcon';
import PaperIcon from '@/assets/svg/PaperIcon';
import NavigationLink from '@/components/navigation-link';
import { useSearchBarContext } from '@/hooks/useSearchBarContext';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import { COMPONENTS, COMPONENTS_ROUTES, DOC_ROUTE, DOCUMENTATION, NAVIGATION_MENU_ITEMS } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import { ChangeEvent, createRef, FC, ReactElement, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const SearchBar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setCurrentSection } = useSideBarContext();

  const {
    initialSearchItemsState,
    isSearchBarToggled,
    toggleSearchBar,
    handleOpenSearchBar,
    searchInputRef,
    setSearchInputValue,
    filterSections,
    isResultEmpty,
    searchItemsState,
    setSearchItemsState,
  } = useSearchBarContext();

  const [isWindowResized, setIsWindowResized] = useState<boolean>(false);
  const [contentTransition, setContentTransition] = useState<string>(styles.transition);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [selectionState, setItemState] = useState({
    lastSelectedItem: searchItemsState.combinedSearchItems[0] as string | null,
    lastHoveredItem: searchItemsState.combinedSearchItems[0] as string | null,
  });

  const overlayStyle = `${styles.overlay} ${isSearchBarToggled && styles.overlay_visible}`;
  const contentStyle = `${styles.content} ${isSearchBarToggled && styles.content_active} ${contentTransition}`;

  const scrollableDivRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<{ [key: string]: RefObject<HTMLAnchorElement> }>({});

  //* ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————
  /**
   * Side effect that runs when `searchItemsState.combinedSearchItems` changes.
   *
   * This effect initializes references for each item in the `combinedSearchItems` array,
   * if they don't already exist. This is useful for accessing the DOM elements corresponding
   * to these items directly.
   *
   * `createRef()` is used to create the references. The result is an object
   * with current property initialized to null. The current property is then
   * populated with the corresponding DOM element when the component mounts.
   */
  useEffect(() => {
    searchItemsState.combinedSearchItems.forEach((item) => {
      if (!itemRefs.current[item]) itemRefs.current[item] = createRef();
    });
  }, [searchItemsState.combinedSearchItems]);

  //*
  // ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
  /**
   * Sets the state of search items and item state to their initial values.
   *
   * This function is resets state of component to its initial state.
   * Used when user interactions or other events in application need to trigger a state reset.
   * For example, closing the search bar, clicking outside the search bar, or navigating to a new page.
   */
  const handleSetInitialState = useCallback(() => {
    setSearchItemsState(initialSearchItemsState);
    setItemState({
      lastSelectedItem: NAVIGATION_MENU_ITEMS[0],
      lastHoveredItem: NAVIGATION_MENU_ITEMS[0],
    });
  }, [setSearchItemsState, initialSearchItemsState]);

  //* ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————
  /**
   * Closes the search modal.
   *
   * This function is responsible for:
   * - toggling the search bar
   * - resetting the state to its initial state
   * - clearing the search input
   * - resetting the scroll position of a scrollable div
   * - resetting the body's overflowY style to 'auto'
   */
  const handleCloseModal = useCallback(() => {
    toggleSearchBar();
    handleSetInitialState();
    if (searchInputRef.current) searchInputRef.current.value = '';
    if (scrollableDivRef.current) scrollableDivRef.current.scrollTop = 0;
    document.body.style.overflowY = 'auto';
  }, [toggleSearchBar, searchInputRef, handleSetInitialState]);

  //* ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————
  /**
   * Listens to keyboard events globally and responds accordingly.
   *
   * Here's what it does based on the key pressed:
   * - 'Escape': If the search bar is toggled on, it will close the modal.
   * - 'K' (along with 'CommandDocs' or 'Control'): It prevents the default behaviour and opens the search bar.
   * - 'ArrowUp'/'ArrowDown': It handles navigation to the previous/next item in the list.
   * - 'Enter': It handles navigation to a particular route based on the last selected item..
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { combinedSearchItems } = searchItemsState;

      setIsTyping(true);

      // Check if 'Escape' is pressed while search bar is toggled
      if (event.key === 'Escape' && isSearchBarToggled) return handleCloseModal();

      // Check if 'k' is pressed while 'CommandDocs' (on Mac) or 'Control' (on Windows) is held down
      if (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        handleOpenSearchBar();
      }

      // Check if up or down arrow is pressed
      switch (event.key) {
        case 'ArrowUp':
          setItemState((prevState) => {
            const prevSelectedItem = prevState.lastSelectedItem;
            if (prevSelectedItem && combinedSearchItems.indexOf(prevSelectedItem) > 0) {
              const newItem = combinedSearchItems[combinedSearchItems.indexOf(prevSelectedItem) - 1];
              if (itemRefs.current[newItem]?.current) {
                const rect = itemRefs.current[newItem].current?.getBoundingClientRect();
                const containerRect = scrollableDivRef.current?.getBoundingClientRect();

                // Check if the item is not in the view
                if (rect && containerRect && rect.top < containerRect.top) {
                  if (combinedSearchItems.indexOf(newItem) === 0) {
                    scrollableDivRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    // Scroll up by the difference between the top of the item and the top of the containers
                    const scrollTop = scrollableDivRef.current?.scrollTop ?? 0;
                    const scrollAmount = scrollTop + rect.top - containerRect.top - 5;
                    scrollableDivRef.current?.scrollTo({ top: scrollAmount, behavior: 'smooth' });
                  }
                }
              }
              return { ...prevState, lastSelectedItem: newItem };
            }
            return prevState;
          });
          break;

        case 'ArrowDown':
          setItemState((prevState) => {
            const prevSelectedItem = prevState.lastSelectedItem;
            if (prevSelectedItem && combinedSearchItems.indexOf(prevSelectedItem) < combinedSearchItems.length - 1) {
              const newItem = combinedSearchItems[combinedSearchItems.indexOf(prevSelectedItem) + 1];
              if (itemRefs.current[newItem]?.current) {
                const rect = itemRefs.current[newItem].current?.getBoundingClientRect();
                const containerRect = scrollableDivRef.current?.getBoundingClientRect();

                // Check if the item is not in the view
                if (rect && containerRect && rect.bottom > containerRect.bottom) {
                  const scrollTop = scrollableDivRef.current?.scrollTop ?? 0;
                  // Scroll down by the difference between the bottom of the item and the bottom of the containers
                  const scrollAmount = scrollTop + rect.bottom - containerRect.bottom + 5;
                  scrollableDivRef.current?.scrollTo({ top: scrollAmount, behavior: 'smooth' });
                }
              }
              return { ...prevState, lastSelectedItem: newItem };
            }
            return prevState;
          });
          break;

        default:
          break;
      }

      // Check if 'Enter is pressed
      if (event.key === 'Enter' && isSearchBarToggled && selectionState.lastSelectedItem) {
        let path = `${DOC_ROUTE}`;
        let currentSection = selectionState.lastSelectedItem;

        switch (selectionState.lastSelectedItem) {
          case 'documentation':
          case 'introduction':
            path = `${DOC_ROUTE}`;
            currentSection = 'docs';
            break;
          case 'components':
            path = `${COMPONENTS_ROUTES}/accordion`;
            currentSection = 'accordion';
            break;
          case 'installation':
          case 'theming':
          case 'typography':
            path = `${DOC_ROUTE}/${selectionState.lastSelectedItem}`;
            break;
          default:
            path = `${COMPONENTS_ROUTES}/${selectionState.lastSelectedItem}`;
            break;
        }

        // Effects after navigation
        setCurrentSection(currentSection);
        if (location.pathname !== path) navigate(path);
        window.scrollTo(0, 0);
        handleCloseModal();
        setItemState((prevState) => ({
          ...prevState,
          lastSelectedItem: NAVIGATION_MENU_ITEMS[0],
          lastHoveredItem: NAVIGATION_MENU_ITEMS[0],
        }));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    searchItemsState.combinedSearchItems,
    handleCloseModal,
    isSearchBarToggled,
    location.pathname,
    navigate,
    setCurrentSection,
    toggleSearchBar,
    searchItemsState,
    selectionState.lastSelectedItem,
    handleOpenSearchBar,
  ]);

  //* ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————
  /**
   * This `useEffect` hook is utilized to handle window resize events to disable animations.
   *
   * When a resize event occurs, a few actions are performed:
   * It checks if the window hasn't been previously resized.
   * If not, it sets the `isWindowResized` state to true and removes content transitions.
   *
   * Sets a new timeout that will be triggered after 250 milliseconds.
   * Once this timeout expires, it sets `isWindowResized` back to false and re-enables content transitions.
   */
  useEffect(() => {
    let resizeTimeout: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      if (!isWindowResized) {
        setIsWindowResized(true);
        setContentTransition('');
      }

      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        setIsWindowResized(false);
        setContentTransition(styles.transition);
      }, 250);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [isWindowResized, searchInputRef]);

  // ———————————————————————————————————————————————————————————————————————————————————————————————————————————————————
  /**
   * This function is used to render a section with multiple navigation items.
   *
   * @param {string} title - The title of the section.
   * @param {string[]} items - An array of items to be displayed in the section.
   * @param {string} baseRoute - The base route for the items.
   * @param {ReactElement} icon - The icon to be displayed next to each item.
   *
   * If the items array is empty, it returns null.
   * For each item, it determines its breadcrumbs and section for the button.
   * Special cases are handled based on the combination of title and section.
   * It returns a div containing the title and NavigationLinks for each item.
   * Each NavigationLink has a mouse enter event that updates the item state.
   * If the item is currently selected, its background color is set to '#f5f8fa'.
   *
   * @returns {ReactElement | null} - The rendered section or null.
   */
  const renderSection = (
    title: string,
    items: string[],
    baseRoute: string,
    icon: ReactElement
  ): ReactElement | null => {
    if (items.length === 0) return null;

    return (
      <div className={styles.section_container}>
        <span className={styles.title}>{title}</span>
        {items.map((section, index) => {
          let path = `${baseRoute}/${section}`;
          let sectionForButton = section;

          // Special cases
          const key = `${title}-${section}`;
          switch (key) {
            case 'Links-documentation':
              path = `${DOC_ROUTE}`;
              sectionForButton = 'docs';
              break;
            case 'Links-components':
              path = `${COMPONENTS_ROUTES}/accordion`;
              sectionForButton = Object.keys(COMPONENTS)[0];
              break;
            case 'Documentation-introduction':
              path = `${DOC_ROUTE}`;
              sectionForButton = 'docs';
              break;
            default:
              break;
          }

          return (
            <NavigationLink
              ref={itemRefs.current[section]}
              key={index}
              path={path}
              section={sectionForButton}
              closeModal={handleCloseModal}
              onMouseEnter={() => {
                setItemState((prevState) => ({
                  ...prevState,
                  lastSelectedItem: isTyping ? prevState.lastSelectedItem : section,
                  lastHoveredItem: section,
                }));
              }}
              style={{ backgroundColor: `${selectionState.lastSelectedItem === section ? '#f5f8fa' : ''}` }}
            >
              <div className={styles.section}>
                <span>{icon}</span>
                <span>{convertToTitleCase(section)}</span>
              </div>
            </NavigationLink>
          );
        })}
      </div>
    );
  };

  // ———————————————————————————————————————————————————————————————————————————————————————————————————————————————————
  /**
   * This function is used to handle search inputs and update the state accordingly.
   *
   * @param {ChangeEvent<HTMLInputElement>} event - The change event from the search input.
   *
   * The input value is extracted from the event, which triggers a search.
   * The state is updated to reflect that typing is in progress.
   * If the input value is empty, it resets the state to its initial values.
   * Then it filters the navigation menu items, documentation items, and components items based on the input value.
   * A new combined search items list is created from these filtered items.
   * Both the search items state and item state are updated with these new values.
   *
   * @returns {void}
   */
  const handleSearch = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setSearchInputValue(value);
    setIsTyping(true);

    if (value === '') return handleSetInitialState();

    const sections = [NAVIGATION_MENU_ITEMS, DOCUMENTATION, COMPONENTS];
    const [filteredNavMenuItems, filteredDocumentationItems, filteredComponentsItems] = sections.map(filterSections);

    const filteredCombinedSearchItems = [
      ...filteredNavMenuItems,
      ...filteredDocumentationItems,
      ...filteredComponentsItems,
    ];

    setSearchItemsState({
      navMenuItems: filteredNavMenuItems,
      documentationItems: filteredDocumentationItems,
      componentsItems: filteredComponentsItems,
      combinedSearchItems: filteredCombinedSearchItems,
    });

    setItemState((prevState) => ({ ...prevState, lastSelectedItem: filteredCombinedSearchItems[0] }));
  };

  //* ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————
  /**
   * This useEffect hook is responsible for handling mouse movement when the search bar is toggled.
   *
   * The hook adds an event listener to the window object, listening for 'mousemove' events.
   * When a mouse move event is detected, it checks if the mouse is over the scrollable div.
   * If so, it updates the state to indicate that typing is no longer happening, and sets the last selected item to be
   * the last hovered item.
   *
   * @listens mousemove - Listens for mouse move events on the window object.
   *
   * @param {boolean} isSearchBarToggled - A state indicating whether the search bar is currently toggled.
   * @param {MutableRefObject<HTMLDivElement | null>} scrollableDivRef - A React ref object pointing to the scrollable
   *   div.
   *
   */
  useEffect(() => {
    if (!isSearchBarToggled) return;

    const handleMouseMove = (e: MouseEvent) => {
      const scrollableDiv = scrollableDivRef.current;

      // Check if the mouse is over the scrollable div
      if (scrollableDiv && scrollableDiv.contains(e.target as Node)) {
        setIsTyping(false);
        setItemState((prevState) => ({
          ...prevState,
          lastSelectedItem: prevState.lastHoveredItem,
        }));
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isSearchBarToggled, scrollableDivRef]);

  //* ————————————————————————————————————————————————————————————————————————————————————————————————

  return (
    <>
      {/* Blurry overlay */}
      <div className={overlayStyle} onClick={handleCloseModal} />

      <div className={contentStyle}>
        <label htmlFor="search" className={styles.visuallyHidden}>
          Search
        </label>

        <div className={styles.searchbar_container}>
          <div>
            <MagnifyingIcon />
          </div>

          <input
            ref={searchInputRef}
            id="search"
            name="search"
            type="text"
            placeholder="Type a command or search..."
            autoComplete="off"
            onChange={handleSearch}
          />

          <button onClick={handleCloseModal} className={styles.close_icon}>
            <CloseIcon />
          </button>
        </div>

        <div className={styles.section_wrapper} ref={scrollableDivRef}>
          {isResultEmpty ? (
            <div className={styles.no_results}>No results found.</div>
          ) : (
            <>
              {renderSection('Links', searchItemsState.navMenuItems, DOC_ROUTE, <PaperIcon />)}
              {renderSection('Documentation', searchItemsState.documentationItems, DOC_ROUTE, <BookOpen />)}
              {renderSection('Components', searchItemsState.componentsItems, COMPONENTS_ROUTES, <EmptyCircleIcon />)}
            </>
          )}
        </div>

        <div className={styles.shortcut_instructions}>
          <span>Open application</span>
          <span>Actions</span>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
