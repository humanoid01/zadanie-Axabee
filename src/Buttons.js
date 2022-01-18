export const Buttons = ({ sortOnChange, manipulatePages, currentPage }) => {
  return (
    <div>
      <div className='upperBtn'>
        {' '}
        <button
          onClick={() =>
            sortOnChange({ date: 'launch_date_utc', actionOrder: false })
          }
        >
          sort by date dsc
        </button>
        <button
          onClick={() =>
            sortOnChange({ date: 'launch_date_utc', actionOrder: true })
          }
        >
          sort by date asc
        </button>
        <button
          onClick={() =>
            sortOnChange({ property: 'mission_name', actionOrder: false })
          }
        >
          sort by name dsc
        </button>
        <button
          onClick={() =>
            sortOnChange({ property: 'mission_name', actionOrder: true })
          }
        >
          sort by name asc
        </button>
      </div>

      <div className='belowBtn'>
        {' '}
        <button className='left' onClick={() => manipulatePages(-1)}>
          Previous
        </button>
        {currentPage + 1}
        <button className='right' onClick={() => manipulatePages(1)}>
          Next
        </button>
      </div>
    </div>
  )
}
