const ToggleSidebarIcon = () => {
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
        style={{ height: '1.5rem', width: '1.5rem' }}
      >
        <rect width='18' height='18' x='3' y='3' rx='2' ry='2'></rect>
        <path d='M9 3v18'></path>
        <path d='m14 9 3 3-3 3'></path>
      </svg>
    </>
  );
};

export default ToggleSidebarIcon;
