import BookOpen from '@/assets/svg/BookOpen';
import CloseIcon from '@/assets/svg/CloseIcon';
import EmptyCircleIcon from '@/assets/svg/EmptyCircleIcon';
import PaperIcon from '@/assets/svg/PaperIcon';
import SearchIcon from '@/assets/svg/SearchIcon';
import NavigationButton from '@/components/NavigationButton';
import { useSearchBarContext } from '@/hooks/useSearchBarContext';
import { COMPONENTS, COMPONENTS_ROUTES, DOCUMENTATION, DOC_ROUTE, NAVIGATION_MENU_ITEMS } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import { ChangeEvent, FC, ReactElement, RefObject, createRef, useCallback, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

const SearchBar: FC = () => {
  const {
    isSearchBarToggled,
    toggleSearchBar,
    searchInputRef,
    setSearchInputValue,
    isResultEmpty,
    filteredNavItems,
    setFilteredNavItems,
    filteredDocumentation,
    setFilteredDocumentation,
    filteredComponents,
    setFilteredComponents,
    filterSections,
    combinedFilteredItems,
    setCombinedFilteredItems,
  } = useSearchBarContext();

  const [isWindowResized, setIsWindowResized] = useState<boolean>(false);
  const [contentTransition, setContentTransition] = useState<string>(styles.transition);
  const [lastSelectedItem, setLastSelectedItem] = useState<string | null>(combinedFilteredItems[0]);
  const [lastHoveredItem, setLastHoveredItem] = useState<string | null>(combinedFilteredItems[0]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const scrollableDivRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<{ [key: string]: RefObject<HTMLButtonElement> }>({});

  useEffect(() => {
    combinedFilteredItems.forEach((item) => {
      if (!itemRefs.current[item]) {
        itemRefs.current[item] = createRef();
      }
    });
  }, [combinedFilteredItems]);

  const overlayStyle = `${styles.overlay} ${isSearchBarToggled && styles.overlay_visible}`;
  const contentStyle = `${styles.content} ${isSearchBarToggled && styles.content_active} ${contentTransition}`;

  const setOriginalItems = useCallback(() => {
    setFilteredNavItems(NAVIGATION_MENU_ITEMS);
    setFilteredDocumentation(DOCUMENTATION);
    setFilteredComponents(Object.keys(COMPONENTS));
    setCombinedFilteredItems([...NAVIGATION_MENU_ITEMS, ...DOCUMENTATION, ...Object.keys(COMPONENTS)]);
    setLastSelectedItem(NAVIGATION_MENU_ITEMS[0]);
    setLastHoveredItem(NAVIGATION_MENU_ITEMS[0]);
  }, [setFilteredNavItems, setFilteredDocumentation, setFilteredComponents, setCombinedFilteredItems]);

  useEffect(() => {
    console.log(lastSelectedItem, lastHoveredItem);
  }, [lastHoveredItem, lastSelectedItem]);

  // close search modal
  const handleCloseModal = useCallback(() => {
    toggleSearchBar();
    setOriginalItems();
    if (searchInputRef.current) searchInputRef.current.value = '';
    if (scrollableDivRef.current) scrollableDivRef.current.scrollTop = 0;
    document.body.style.overflowY = 'auto';
  }, [toggleSearchBar, searchInputRef, setOriginalItems]);

  // handle toggle search bar with keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setIsTyping(true);
      if (event.key === 'Escape' && isSearchBarToggled) return handleCloseModal();

      // Check if 'k' is pressed while 'Command' (on Mac) or 'Control' (on Windows) is held down
      if (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSearchBar();
      }

      // check if up or down arrow is pressed
      switch (event.key) {
        case 'ArrowUp':
          setLastSelectedItem((prevSelectedItem) => {
            if (prevSelectedItem && combinedFilteredItems.indexOf(prevSelectedItem) > 0) {
              const newItem = combinedFilteredItems[combinedFilteredItems.indexOf(prevSelectedItem) - 1];
              if (itemRefs.current[newItem]?.current) {
                const rect = itemRefs.current[newItem].current?.getBoundingClientRect();
                const containerRect = scrollableDivRef.current?.getBoundingClientRect();

                // Check if the item is not in the view
                if (rect && containerRect && rect.top < containerRect.top) {
                  if (combinedFilteredItems.indexOf(newItem) === 0) {
                    // Scroll all the way to the top
                    scrollableDivRef.current?.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    });
                  } else {
                    // Scroll up by the difference between the top of the item and the top of the container
                    const scrollTop = scrollableDivRef.current?.scrollTop ?? 0;
                    const scrollAmount = scrollTop + rect.top - containerRect.top - 5;
                    scrollableDivRef.current?.scrollTo({
                      top: scrollAmount,
                      behavior: 'smooth',
                    });
                  }
                }
              }
              setLastHoveredItem(newItem);
              return newItem;
            }
            setLastHoveredItem(prevSelectedItem);
            return prevSelectedItem;
          });
          break;

        case 'ArrowDown':
          setLastSelectedItem((prevSelectedItem) => {
            if (
              prevSelectedItem &&
              combinedFilteredItems.indexOf(prevSelectedItem) < combinedFilteredItems.length - 1
            ) {
              const newItem = combinedFilteredItems[combinedFilteredItems.indexOf(prevSelectedItem) + 1];
              if (itemRefs.current[newItem]?.current) {
                const rect = itemRefs.current[newItem].current?.getBoundingClientRect();
                const containerRect = scrollableDivRef.current?.getBoundingClientRect();

                // Check if the item is not in the view
                if (rect && containerRect && rect.bottom > containerRect.bottom) {
                  const scrollTop = scrollableDivRef.current?.scrollTop ?? 0;
                  // Scroll down by the difference between the bottom of the item and the bottom of the container
                  const scrollAmount = scrollTop + rect.bottom - containerRect.bottom + 5;
                  scrollableDivRef.current?.scrollTo({
                    top: scrollAmount,
                    behavior: 'smooth',
                  });
                }
              }
              setLastHoveredItem(newItem);
              return newItem;
            }
            setLastHoveredItem(prevSelectedItem);
            return prevSelectedItem;
          });
          break;

        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [combinedFilteredItems, handleCloseModal, isSearchBarToggled, lastSelectedItem, toggleSearchBar]);

  // Handle window resize and DISABLES transition when window is resized
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

  const renderSection = (title: string, items: string[], baseRoute: string, icon: ReactElement) => {
    if (items.length === 0) return null;

    return (
      <div className={styles.section_container}>
        <span className={styles.title}>{title}</span>
        {items.map((section, index) => {
          let path = `${baseRoute}/${section}`;
          let sectionForButton = section;

          // Special cases
          if (title === 'Links' && section === 'documentation') {
            path = `${DOC_ROUTE}`;
            sectionForButton = 'docs';
          } else if (title === 'Links' && section === 'components') {
            path = `${COMPONENTS_ROUTES}/accordian`;
            sectionForButton = Object.keys(COMPONENTS)[0];
          } else if (title === 'Documentation' && section === 'introduction') {
            path = `${DOC_ROUTE}`;
            sectionForButton = 'docs';
          }

          return (
            <NavigationButton
              ref={itemRefs.current[section]}
              key={index}
              path={path}
              section={sectionForButton}
              closeSidebar={() => {
                handleCloseModal();
                setLastSelectedItem(NAVIGATION_MENU_ITEMS[0]);
                setLastHoveredItem(NAVIGATION_MENU_ITEMS[0]);
              }}
              onMouseEnter={() => {
                setLastHoveredItem(section);
                if (!isTyping) return setLastSelectedItem(section);
              }}
              style={{
                backgroundColor: `${lastSelectedItem === section ? '#f5f8fa' : ''}`,
              }}
            >
              <div className={styles.section}>
                <span>{icon}</span>
                <span>{convertToTitleCase(section)}</span>
              </div>
            </NavigationButton>
          );
        })}
      </div>
    );
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInputValue(value);
    setIsTyping(true);

    const filterAllSections = () => {
      const filteredNavItems = filterSections(NAVIGATION_MENU_ITEMS);
      const filteredDocumentation = filterSections(DOCUMENTATION);
      const filteredComponents = filterSections(Object.keys(COMPONENTS));

      setFilteredNavItems(filteredNavItems);
      setFilteredDocumentation(filteredDocumentation);
      setFilteredComponents(filteredComponents);
      setCombinedFilteredItems([...filteredNavItems, ...filteredDocumentation, ...filteredComponents]);
      setLastSelectedItem([...filteredNavItems, ...filteredDocumentation, ...filteredComponents][0]);
    };

    value === '' ? setOriginalItems() : filterAllSections();
  };

  useEffect(() => {
    const handleMouseMove = () => {
      setIsTyping(false);
      setLastSelectedItem(lastHoveredItem);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isSearchBarToggled, lastHoveredItem]);

  return (
    <>
      {/* Blurry overlay */}
      <div className={overlayStyle} onClick={handleCloseModal} />

      <div className={contentStyle}>
        <label htmlFor='search' className={styles.visuallyHidden}>
          Search
        </label>

        <div className={styles.searchbar_container}>
          <div>
            <SearchIcon />
          </div>

          <input
            ref={searchInputRef}
            id='search'
            name='search'
            type='text'
            placeholder='Type a command or search...'
            autoComplete='off'
            onChange={handleSearch}
          />

          <button onClick={handleCloseModal}>
            <CloseIcon />
          </button>
        </div>

        <div className={styles.section_wrapper} ref={scrollableDivRef}>
          {isResultEmpty ? (
            <div className={styles.no_results}>No results found.</div>
          ) : (
            <>
              {renderSection('Links', filteredNavItems, DOC_ROUTE, <PaperIcon />)}
              {renderSection('Documentation', filteredDocumentation, DOC_ROUTE, <BookOpen />)}
              {renderSection('Components', filteredComponents, COMPONENTS_ROUTES, <EmptyCircleIcon />)}
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
