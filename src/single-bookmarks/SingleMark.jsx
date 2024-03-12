
import PropTypes from 'prop-types'

const SingleMark = ({bookmark}) => {
  const {title} = bookmark;
  return (
    <div className='text-black bg-white py-3 px-2 mb-2 rounded-md font-bold'>
      <h3>{title}</h3>
    </div>
  )
}

SingleMark.propTypes = {
  bookmark: PropTypes.object
}

export default SingleMark