const ToggleThemeIcon = () => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        // class='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
        style={{ height: '1.5rem', width: '1.5rem' }}
      >
        <path d='M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'></path>
        <path d='M12 3v1'></path>
        <path d='M12 20v1'></path>
        <path d='M3 12h1'></path>
        <path d='M20 12h1'></path>
        <path d='m18.364 5.636-.707.707'></path>
        <path d='m6.343 17.657-.707.707'></path>
        <path d='m5.636 5.636.707.707'></path>
        <path d='m17.657 17.657.707.707'></path>
      </svg>
    </>
  );
};

export default ToggleThemeIcon;