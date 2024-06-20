
import clsx from 'clsx'
import googleplay from '../images/assets/googlePlay.png'
import { Link } from 'react-router-dom'

export function GoogleStoreLink({ color = 'black' }) {
  return (
    <Link
      to="/"
      aria-label="Download on the App Store"
      className={clsx(
        'rounded-lg transition-colors',
        color === 'black'
          ? 'bg-gray-800 text-white hover:bg-gray-900'
          : 'bg-white text-gray-900 hover:bg-gray-50',
      )}
    >
      <img src={googleplay} alt="Google Play" className='h-12 w-auto' />
      
    </Link>
  )
}
